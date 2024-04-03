import React from 'react'

function EjercicioVideo4HijoD({ casasHogwarts }) {
    return (
        <div className='cartaCasa'>
            <img src={casasHogwarts[3].img} />
            <h3>{casasHogwarts[3].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[3].precio}$</p>
            </div>
                <button>Comprar</button>
        </div>
    )
}

export default EjercicioVideo4HijoD
