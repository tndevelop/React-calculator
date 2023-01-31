import {Button, Row, Form, Container, Col} from 'react-bootstrap'
import {useState} from 'react'
import '../App.css';
import {HiTrash} from "react-icons/hi";
import {BiHide, BiShow} from "react-icons/bi";

const btnSize = 16

export default function ComputationalLine(props){

    const [val,setVal] = useState(props.val)
    const [disabled, setDisabled] = useState(props.disabled)

    const changeVal = (newVal) => {
        if(!isNaN(newVal)){        
            setVal(newVal)
            props.update(newVal, props.idx)
        }
    }

    const changeSign = (newSign) => {
        if(val != 0){
            const newVal = -1*val
            setVal(newVal)
            props.update(newVal, props.idx)
        }
    }

    const changeLocalAbility = () => {
        setDisabled(!disabled)
        props.disable(props.idx)
    }
 
    return(
        <Container fluid className="Line">
        <Row>
            <Form.Group>
                <Col lg={2}>
                    <Form.Select className="Padding btn-primary" disabled={disabled} value={val>= 0? '+' : '-'} onChange={(event) => changeSign(event.target.value)}>
                        <option >+</option>
                        <option >-</option>
                    </Form.Select>
                </Col>
                <Col lg={4}>
                    <Form.Control disabled={disabled} value={Math.abs(val)} onChange={(event) => changeVal(event.target.value)}></Form.Control>    
                </Col>
                <Col lg={3}>
                    <Button variant='danger' onClick={() => props.deleteLine(props.idx)}> Delete <HiTrash size={btnSize} /> </Button>
                </Col>
                <Col lg={3}>
                    <Button variant='warning' onClick={() => changeLocalAbility()}>
                        {disabled ? <div className="Warning"> Enable  <BiShow size={btnSize} /> </div> : <div className="Warning"> Disable<BiHide size={btnSize}/> </div>}
                    </Button>
                </Col>
            </Form.Group>
                
        </Row>
        </Container>
        )
}
