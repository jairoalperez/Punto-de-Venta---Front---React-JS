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
    //los elementos listados son solo un ejemplo, los valores de este state se llenaran con los datos de la db
    {
        name: 'Objeto 1',
        qnty: 10,
    },
    {
        name: 'Objeto 2',
        qnty: 2,
    },
    {
        name: 'Objeto 3',
        qnty: 10,
    },
    {
        name: 'Objeto 4',
        qnty: 15,
    },
    {
        name: 'Objeto 5',
        qnty: 1,
    },
    {
        name: 'Objeto 6',
        qnty: 12,
    },
    {
        name: 'Objeto 7',
        qnty: 5,
    },
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
                      <Input type="radio" value={element.name} id={element.name} checked={selected === element.name} onChange={handleClick} />
                      <Label for='inv'>Nombre: {element.name}, Cantidad:  {element.qnty}</Label>
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
