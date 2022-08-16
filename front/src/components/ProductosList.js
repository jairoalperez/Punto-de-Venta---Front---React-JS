import React, { useState } from 'react'
import Select from 'react-select'
import '../Styles/global.css'
import {FormGroup, Label, Input} from 'reactstrap'

export default function ProductosList() {

  const options = [
    { value: 1, label: 'Objeto 1' },
    { value: 2, label: 'Objeto 2' },
    { value: 3, label: 'Objeto 3' },
    { value: 4, label: 'Objeto 4' },
    { value: 5, label: 'Objeto 5' },
    { value: 6, label: 'Objeto 6' },
    { value: 7, label: 'Objeto 7' },
  ]

  const [elements, setElements] = useState([
    'Orden 1',
    'Orden 2',
    'Orden 3',
    'Orden 4',
    'Orden 5',
    'Orden 6',
    'Orden 7',
    'Orden 8',
    'Orden 9',
    'Orden 10',
  ])

  const [data, setData] = useState('')

  const [selected, setSelected] = useState(null);

  const handleClick = (event) => {
    setSelected(event.target.value)
  }

  const onDropChange = (valueselect) => {
    setData(valueselect.label)
  }

  const sendData = (event) => {
    event.preventDefault();
    console.log(data)
  }

  return (
    <div className='container'>
      <div className='containerselectser'>
        <div>
          <h3>Ventas por servicio</h3>
          <Select
            className='selectser'
            placeholder='Seleccionar Servicio'
            options={options}
            onChange={onDropChange}
          />
          <button className='btnbuscarser' onClick={sendData}>
            Buscar
          </button>
          <div className='containerOS'>
            {elements.map(element => {
              return (
                <div>
                  <div className='conbtnsr'>
                    <FormGroup className='btnsrOS'>
                      <Input type="radio" value={element} id={element} checked={selected === element} onChange={handleClick} />
                      <Label for='inv'>{element}</Label>
                    </FormGroup>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )

}
