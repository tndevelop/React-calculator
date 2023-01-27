import {Button, StyleSheet} from 'react-bootstrap'
import Select from 'react-select'

import '../App.css';

const options = [
    { value: 'add', label: '+' },
    { value: 'sub', label: '-' }
  ]

export default function OperationalButton(){
    return(
        <div className="Button">
            <Select options={options} ></Select>
        </div>
        )
}
