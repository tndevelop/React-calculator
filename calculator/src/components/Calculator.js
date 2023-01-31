import { useState, useEffect} from 'react'
import { Button, Row, Container, Col, Card } from 'react-bootstrap';
import '../App.css';
import ComputationalLine from './ComputationalLine';

const defaultLines = [
    {val: 0, idx:0, disabled: false},
    {val: 0, idx:1, disabled: false}
]

export default function Calculator(){

    const [lines, setLines] = useState([...defaultLines])
    const [result, setResult] = useState(0)
    const [availableIdx, setAvailableIdx] = useState(2)
    

    useEffect(() => {
        setResult( lines.filter((l) => l.disabled==false).map(l =>l.val).reduce((a,b) => Number(a)+Number(b), 0))
      }, [lines, lines.length]);

    const modifySingleLine = (idx, operation) => {
        return lines.map(l => { 
            if(l.idx == idx) {
                let newLine = l; 
                newLine = operation(l)
                return newLine
            }else{
                return l;
            }
        }) 
    }

    const updateVal = (newVal, idx) => {
        /*let linesCopy = lines.map(l => { 
            if(l.idx == idx) {
                let newLine = l; 
                newLine.val = newVal; 
                return newLine
            }else{
                return l;
            }
        }) */
        let linesCopy = modifySingleLine(idx, (l => {l.val = newVal; return l;}) )
        setLines([...linesCopy])
    }

    const addLine = () => {
        let newLine = {val : 0, idx: availableIdx, disabled: false}
        setAvailableIdx(availableIdx+1)
        setLines([...lines, newLine])
    }

    const deleteLine = async (idx) => {
        let newLines = lines.filter((l) => l.idx!=idx)
        await setLines([])
        setLines([...newLines])
        //setTimeout(() => {setLines([...newLines])}, 1)
        //this.forceUpdate()
    }

    const changeAbility = (idx) => {
        /*let linesCopy = lines.map(l => { 
            if(l.idx == idx) {
                let newLine = l; 
                newLine.disabled = !l.disabled; 
                return newLine
            }else
                return l;
        })*/
        let linesCopy = modifySingleLine(idx, (l => {l.disabled = !l.disabled; return l;}) )
        setLines([...linesCopy])
    }

    return(
        <Container fluid>
        

            
                {lines.map((l, index) => 
                    <ComputationalLine 
                        deleteLine={(idx) => deleteLine(idx)} 
                        disable={(idx) => changeAbility(idx)} 
                        update={(newVal, idx) => updateVal(newVal, idx)} 
                        val={l.val} 
                        key={index} 
                        idx={l.idx} 
                        disabled={l.disabled}/>
                )}
            
            <Row className="Bottom-line">
                <Col lg={6}>
                    <Button className="Add-row" onClick={() => addLine()}>Add Row</Button>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Title > <h4> Result = {result} </h4></Card.Title>
                    </Card>
                    
                </Col>
            </Row>
        
        </Container>
        )
}