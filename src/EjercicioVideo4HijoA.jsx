import React from 'react'
import './EjercicioVideo4.css';
function EjercicioVideo4HijoA({ casasHogwarts }) {
    return (
        <div className='cartaCasa'>
            <img src={casasHogwarts[0].img} />
            <h3>{casasHogwarts[0].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[0].precio}$</p>
            </div>
                <button>Comprar</button>
        </div>
    )
}

export default EjercicioVideo4HijoA
