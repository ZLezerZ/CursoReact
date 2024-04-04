import {React, useRef} from 'react'

function EjercicioVideo4HijoC({ casasHogwarts, precioTotal, setPrecioTotal }) {
    
    const sumar = () => {
        setPrecioTotal(precioTotal + casasHogwarts[2].precio);
        quitar();
    }
    const cartaRef = useRef(null);
    const quitar=()=>{
        cartaRef.current.style.display="none";
    }
    return (
        <div className={'cartaCasa casaC'} ref={cartaRef}>
            <img src={casasHogwarts[2].img} />
            <h3>{casasHogwarts[2].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[2].precio}$</p>
            </div>
            <button onClick={sumar}>Reservar</button>
        </div>
    )
}

export default EjercicioVideo4HijoC
