import {Button, Row, Form} from 'react-bootstrap'
import Select from 'react-select'
import {useState} from 'react'

import '../App.css';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import OperationalButton from './OperationalButton';



export default function ComputationalLine(props){

    const [val,setVal] = useState(props.val)
    const [disabled, setDisabled] = useState(props.disabled)

    const changeVal = (newVal) => {
        setVal(newVal)
        props.update(newVal, props.idx)
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
        <Row>
            <Form.Group >
                
                <Form.Select disabled={disabled} value={val>= 0? '+' : '-'} onChange={(event) => changeSign(event.target.value)}>
                    <option >+</option>
                    <option >-</option>
                </Form.Select>
                <Form.Control disabled={disabled} value={Math.abs(val)} onChange={(event) => changeVal(event.target.value)}></Form.Control>    
                <Button onClick={() => props.deleteLine(props.idx)}>Delete</Button>
                <Button onClick={() => changeLocalAbility()}>{disabled ? "Enable" : "Disable"}</Button>
            </Form.Group>
            {/*<OperationalButton/>*/}

        </Row>
        )
}
