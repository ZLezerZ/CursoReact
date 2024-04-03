import React from 'react'
import EjercicioVideo4HijoA from './EjercicioVideo4HijoA';
import EjercicioVideo4HijoB from './EjercicioVideo4HijoB';
import EjercicioVideo4HijoC from './EjercicioVideo4HijoC';
import EjercicioVideo4HijoD from './EjercicioVideo4HijoD';
import './EjercicioVideo4.css';
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

  return (
    <div>
        <h3>Total a pagar: </h3>
        <div className='totalCartas'>
          <EjercicioVideo4HijoA casasHogwarts={casasHogwarts} />
          <EjercicioVideo4HijoB casasHogwarts={casasHogwarts} />
          <EjercicioVideo4HijoC casasHogwarts={casasHogwarts} />
          <EjercicioVideo4HijoD casasHogwarts={casasHogwarts} />
        </div>
    </div>
  )
}

export default EjercicioVideo4
