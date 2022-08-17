import React, { useState } from 'react'
import axios from 'axios'

export default function CliCom() {

    const [elements, setElements] = useState({
        element: []
    })

    const buscar = () => {
        const fetchb = async () => {
            const res = await axios.get('http://localhost:4000/mostrar-climascom')
            const datos = res.data
            setElements({ element: datos })
        }
        fetchb()
    }




    return (
        <div className='container'>
            <div className='containerselectser'>
                <h1>Clientes que mas han Comprado</h1>
                <button className='btnbuscarser' onClick={buscar}>
                    Buscar
                </button>

                <div className='containerSMV'>
                    {elements.element.map(elemento => {
                        return (
                            <div className='conSMV'>
                                <div className='btnsSMV'>
                                    Cliente: {elemento.nombrec} | {elemento.repeticiones}
                                </div>
                            </div>
                        )
                    })}
                </div>



            </div>
        </div>
    )

}