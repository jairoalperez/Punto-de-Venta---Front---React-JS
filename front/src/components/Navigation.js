import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <Link className='navbar-brand' to='/'>Punto de Venta</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link className='nav-link' to='/lista'>Lista de Productos</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to='/ingresarproducto'>Ingresar Producto</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to='/vender'>Venta</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}