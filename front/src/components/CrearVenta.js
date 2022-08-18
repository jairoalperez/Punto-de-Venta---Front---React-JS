import React, {useState} from 'react'
import axios from 'axios'

export default function CrearVenta() {
  
  const [elements, setElements] = useState({
    element: []
  })

  const actServicios = () => {
    const fetchprod = async () => {
      const res = await axios.get('http://localhost:4000/mostrar-producto')
      const datos = res.data
      setElements({ element: datos })
    }
    fetchprod()
  }

  const [data, setData] = useState({
    nomc: '',
    mon: '',
    serv: ''
  })
  
  const [options, setOptions] = useState(
    { option: [] })

  const onDropChange = e => {
    setData(prevState => ({
      ...prevState, serv: e.target.value
    }))
  }

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault();

    const ingresarproducto = async () => {
      const res = await axios.post('http://localhost:4000/registrar-venta', {
        monto: data.mon,
        productos: [data.serv],
        nombrec: data.nomc
      },
      alert('registro exitoso')
      )
      console.log(res)
    }
    ingresarproducto()
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
          <h1>Punto de Venta</h1> 

          <div className='containerlistServ'>
            <button className='btnbuscarser' onClick={actServicios}>
            Actualizar Lista
            </button>
              {elements.element.map(elemento => {
                return (
                  <div>
                    <div className='conServ'>
                      <h5>Servicio: {elemento.nombrep} - Valor Aprox: ${elemento.valorp}</h5>
                    </div>
                  </div>
                )
              })}
          </div>
          
          <div className='concart'>
            <button className='btnbuscarser' onClick={actOptions}>
              Actualizar Opciones
            </button>
            <div>
              <select
                className='selectserven'
                placeholder='Seleccionar Servicio'
                onChange={onDropChange}
              >
                {
                  options.option.map(opt =>
                    <option key={opt} value={opt}>{opt}</option>)
                }
              </select>
            </div>
            <input
              className='tinp'
              placeholder='Nombre del Cliente'
              type='text'
              name='nomc'
              onChange={handleInputChange}
            />
            <input
              className='tinp'
              placeholder='Monto $'
              type='numeric'
              name='mon'
              onChange={handleInputChange}
            />
            <button className='btnnuevop' onClick={sendData}>
              Finalizar Venta
            </button>
          </div>
          

        </div>
      </div>
    )
  
}
