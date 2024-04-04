import {React,useState, useRef} from 'react';
function EjercicioVideo4HijoA({ casasHogwarts, precioTotal, setPrecioTotal}) {

    const sumar=()=> {
        setPrecioTotal(precioTotal + casasHogwarts[0].precio);
        quitar();
    }
    const quitar=()=>{
        cartaRef.current.style.display="none";
    }
    const cartaRef = useRef(null); 
    return (
        <div className={'cartaCasa casaA'} ref={cartaRef}>
            <img src={casasHogwarts[0].img} />
            <h3>{casasHogwarts[0].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[0].precio}$</p>
            </div>
                <button onClick={sumar}>Reservar</button>
        </div>
    )
}

export default EjercicioVideo4HijoA
