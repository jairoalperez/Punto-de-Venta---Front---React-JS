import React, { useState } from 'react'
import axios from 'axios'

export default function IngresarProducto() {

  const [elements, setElements] = useState({
    element: []
  })

  const [data, setData] = useState({
    nomp: '',
    valp: ''
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault();

    const ingresarproducto = async () => {
      const res = await axios.post('http://localhost:4000/registrar-producto', {
        nombrep: data.nomp,
        valorp: data.valp
      },
      alert('Registro Exitoso')
      )
      console.log(res)
    }
    ingresarproducto()
  }

  const actServicios = () => {
    const fetchprod = async () => {
      const res = await axios.get('http://localhost:4000/mostrar-producto')
      const datos = res.data
      setElements({ element: datos })
    }
    fetchprod()
  }



  return (
    <div className='container'>
      <div className='containerselectser'>
        <div>
          <h1>Ingresar Servicio</h1>

          
            <div className='containerlistServ'>
            <button className='btnbuscarser' onClick={actServicios}>
            Actualizar Lista
            </button>
              {elements.element.map(elemento => {
                return (
                  <div>
                    <div className='conServ'>
                      <h5>Servicio: {elemento.nombrep} - ${elemento.valorp}</h5>
                    </div>
                  </div>
                )
              })}
            </div>

          <div className='connuevop'>
            <input
              className='tinp'
              placeholder='Nombre'
              type='text'
              name='nomp'
              onChange={handleInputChange}
            />
            <input
              className='tinp'
              placeholder='Valor Aproximado $'
              type='numeric'
              name='valp'
              onChange={handleInputChange}
            />
            <button className='btnnuevop' onClick={sendData}>
              Ingresar Nuevo Servicio
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}
