import React from 'react'

function EjercicioVideo4HijoC({ casasHogwarts }) {
    return (
        <div className='cartaCasa'>
            <img src={casasHogwarts[2].img} />
            <h3>{casasHogwarts[2].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[2].precio}$</p>
            </div>
                <button>Comprar</button>
        </div>
    )
}

export default EjercicioVideo4HijoC
