import {Button, StyleSheet} from 'react-bootstrap'
import Select from 'react-select'
import {useState} from 'react'

import '../App.css';

const options = [
    { value: 'add', label: '+' },
    { value: 'sub', label: '-' }
  ];

export default function OperationalButton(){

    let [selected, setSelected] = useState(options[0])

    const changeValue = (inputValue) => {
        
        const inputOption = options.filter(o => o.value == inputValue)
        setSelected(inputOption)
    }
    
    return(
        <div className="Button">
            <Select options={options} onChange={(event) => changeValue(event.value)} ></Select>
        </div>
        )
}
