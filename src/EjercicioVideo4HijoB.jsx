import React from 'react'
import './EjercicioVideo4.css';

const EjercicioVideo4HijoB = ({ casasHogwarts }) => {
    return (
        <div className='cartaCasa'>
            <img src={casasHogwarts[1].img} />
            <h3>{casasHogwarts[1].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[1].precio}$</p>
            </div>
                <button>Comprar</button>
        </div>
    )
}

export default EjercicioVideo4HijoB
