import { useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
 
import ComputationalLine from './ComputationalLine';

const defaultLines = [
    {val: 0, idx:0, disabled: false},
    {val: 0, idx:1, disabled: false}
]

export default function Calculator(){

    const [lines, setLines] = useState([...defaultLines])
    const [result, setResult] = useState(0)
    const [availableIdx, setAvailableIdx] = useState(2)
    const [,updateState] = useState()
    

    const updateVal = (newVal, idx) => {
        let linesCopy = lines
        linesCopy[idx].val = newVal
        setLines([...linesCopy])
    }

    useEffect(() => {
        setResult( lines.map(l =>l.val).reduce((a,b) => Number(a)+Number(b), 0))
      }, [lines]);

    const addLine = () => {
        let newLine = {val : availableIdx, idx: availableIdx}
        setAvailableIdx(availableIdx+1)
        setLines([...lines, newLine])
    }

    const deleteLine = (idx) => {
        const newLines = lines.filter((l) => l.idx!=idx)
        setLines([...newLines])
        this.forceUpdate()
    }

    const changeAvailability = (idx) => {
        let linesCopy = lines
        linesCopy[idx].disabled = !linesCopy[idx].disabled 
        setLines([...linesCopy])
    }

    return(
        <>
        <Button onClick={() => addLine()}>Add Row</Button>


        {lines.map((l, index) => 
            <ComputationalLine deleteLine={(idx) => deleteLine(idx)} disable={(idx) => changeAvailability(idx)} update={(newVal, idx) => updateVal(newVal, idx)} sign={l.sign} val={l.val} key={index} idx={l.idx}/>
        )}

        Result = {result}
        
        </>
        )
}