import {React,useState, useRef} from 'react';
function EjercicioVideo4HijoA({ casa, img, precio, precioTotal, setPrecioTotal}) {
    
    let claseCarta = '';
    if(casa.includes('Griffindor')){
        claseCarta='casaA';
    }else if(casa.includes('Hufflepuff')){
        claseCarta='casaB';
    }else if(casa.includes('Ravenclaw')){
        claseCarta='casaC';
    }else if(casa.includes('Slytherin')){
        claseCarta='casaD';
    };

    const sumar=()=> {
        setPrecioTotal(precioTotal + precio);
        quitar();
    }
    const quitar=()=>{
        cartaRef.current.style.display="none";
    }
    const cartaRef = useRef(null); 
    return (
        <div className={`cartaCasa ${claseCarta}`} ref={cartaRef}>
            <img src={img}/>
            <h3>{casa}</h3>
            <div className='cartaCasa-precio'>
                <p>Precio:</p>
                <p>{precio}$</p>
            </div>
                <button onClick={sumar}>Reservar</button>
        </div>
    )
}

export default EjercicioVideo4HijoA
