import React, { useState } from 'react'
import '../Styles/global.css'
import { FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

export default function ProductosList() {

  const [elements, setElements] = useState({
    element: []
  })

  const [options, setOptions] = useState(
    { option: [] })

  const [data, setData] = useState('')

  const [selected, setSelected] = useState('');

  const handleClick = (event) => {
    setSelected(event.target.value)
  }

  const onDropChange = e => {
    setData(e.target.value)
  }

  const buscarVentas = () => {
    const fetchventas = async () => {
      const res = await axios.get('http://localhost:4000/mostrar-venta/' + data)
      const datos = res.data
      setElements({ element: datos })
    }
    fetchventas()
  }

  const actOptions = () => {
    const fetchproductos = async () => {
      const res = await axios.get('http://localhost:4000/mostrar-producto')
      const datos = res.data
      setOptions({ option: datos.map(opt => opt.nombrep) })
    }
    fetchproductos()

  }



  return (
    <div className='container'>
      <div className='containerselectser'>
        <div>
          <h1>Ventas por servicio</h1>
          <button className='btnbuscarser' onClick={actOptions}>
            Actualizar Opciones
          </button>
          <div>
            <select
              className='selectser'
              placeholder='Seleccionar Servicio'
              onChange={onDropChange}
            >
              {
                options.option.map(opt =>
                  <option key={opt} value={opt}>{opt}</option>)
              }
            </select>
          </div>

          <button className='btnbuscarser' onClick={buscarVentas}>
            Buscar
          </button>
          <div className='containerOS'>
            {elements.element.map(elemento => {
              return (
                <div>
                  <div className='conbtnsr'>
                    <FormGroup className='btnsrOS'>
                      <Input type="radio" value={elemento.idventa.toString()} id={elemento.idventa.toString()} checked={selected === elemento.idventa.toString()} onChange={handleClick} />
                      <Label for='inv'>ID: {elemento.idventa}, Cliente: {elemento.nombrec}, Monto: ${elemento.monto}</Label>
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
