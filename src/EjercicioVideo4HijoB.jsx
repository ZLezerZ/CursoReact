import {React, useRef} from 'react'

const EjercicioVideo4HijoB = ({ casasHogwarts, precioTotal, setPrecioTotal}) => {

    const suma =() =>{
        setPrecioTotal(precioTotal + casasHogwarts[1].precio);
        quitar();
    }
    const cartaRef = useRef(null);
    const quitar=()=>{
        cartaRef.current.style.display="none";
    }
    return (
        <div className={'cartaCasa casaB'} ref={cartaRef}>
            <img src={casasHogwarts[1].img} />
            <h3>{casasHogwarts[1].casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{casasHogwarts[1].precio}$</p>
            </div>
                <button onClick={suma}>Reservar</button>
        </div>
    )
}

export default EjercicioVideo4HijoB
