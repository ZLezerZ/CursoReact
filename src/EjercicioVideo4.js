import {React, useState} from 'react'
import './EjercicioVideo4.css';
import EjercicioVideo4HijoA from './EjercicioVideo4HijoA';
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
        <h3>Total a pagar: {precioTotal}$</h3>
        <div className='totalCartas'>
          <EjercicioVideo4HijoA casa={casasHogwarts[0].casa} img={casasHogwarts[0].img} precio={casasHogwarts[0].precio} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
          <EjercicioVideo4HijoA casa={casasHogwarts[1].casa} img={casasHogwarts[1].img} precio={casasHogwarts[1].precio} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
          <EjercicioVideo4HijoA casa={casasHogwarts[2].casa} img={casasHogwarts[2].img} precio={casasHogwarts[2].precio} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
          <EjercicioVideo4HijoA casa={casasHogwarts[3].casa} img={casasHogwarts[3].img} precio={casasHogwarts[3].precio} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal}/>
        </div>
    </div>
  )
}

export default EjercicioVideo4
