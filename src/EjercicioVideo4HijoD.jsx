import {React, useRef} from 'react'

function EjercicioVideo4HijoD({ casasHogwarts, precioTotal, setPrecioTotal}) {
    
    const sumar=()=>{
        setPrecioTotal(precioTotal + casasHogwarts[3].precio);
        quitar();
    }
    const cartaRef = useRef(null);
    const quitar=()=>{
        cartaRef.current.style.display="none";
    }
    return (
        <div className={'cartaCasa casaD'} ref={cartaRef}>
            <img src={casasHogwarts[3].img} />
            <h3>{casasHogwarts[3].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[3].precio}$</p>
            </div>
            <button onClick={sumar}>Reservar</button>
        </div>
    )
}

export default EjercicioVideo4HijoD
