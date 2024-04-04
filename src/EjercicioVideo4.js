import {React, useState} from 'react'
import './EjercicioVideo4.css';
import EjercicioVideo4HijoA from './EjercicioVideo4HijoA';
import EjercicioVideo4HijoB from './EjercicioVideo4HijoB';
import EjercicioVideo4HijoC from './EjercicioVideo4HijoC';
import EjercicioVideo4HijoD from './EjercicioVideo4HijoD';
import hufflepuff from "./imagenes/hp.png";
import ravenclaw from "./imagenes/rc.png";
import griffindor from "./imagenes/gf.png";
import slytherin from "./imagenes/sl.png";
const EjercicioVideo4 = () => {

  const casasHogwarts = [
    {
      casa: "Griffindor",
      img: griffindor,
      precio: 100,
    },
    {
      casa: "Hufflepuff",
      img: hufflepuff,
      precio: 50,
    },
    {
      casa: "Ravenclaw",
      img: ravenclaw,
      precio: 75,
    },
    {
      casa: "Slytherin",
      img: slytherin,
      precio: 200,
    },
  ];
  const [precioTotal, setPrecioTotal] =useState(0);
  return (
    <div>
      <h2>Reserve la cena en alguna de nuestras Casas</h2>
        <h3>Total a pagar: {precioTotal} </h3>
        <div className='totalCartas'>
          <EjercicioVideo4HijoA casasHogwarts={casasHogwarts } precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
          <EjercicioVideo4HijoB casasHogwarts={casasHogwarts} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
          <EjercicioVideo4HijoC casasHogwarts={casasHogwarts} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
          <EjercicioVideo4HijoD casasHogwarts={casasHogwarts} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
        </div>
    </div>
  )
}

export default EjercicioVideo4
