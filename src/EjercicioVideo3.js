//Escribimos "rafce" para que se ree la estructura del componente
import React, { useState } from "react"; //esto es para poder utilizar el hook
import "./EjercicioVideo3.css";

const EjercicioVideo3 = () => {
  const [contador, setContador] = useState(0);

  const disminuir = () => {
    setContador(contador - 1);
  };
  const aumentar = () => {
    setContador(contador + 1); //esto se ejecuta asincrónicamente, es decir que le suma el +1 recién cuando termina la función,
    setContador((e) => e + 1); //Esto funciona como una función que actualiza el valor e, que es el contador, y por tanto siempre trabaja con el último valor
  };
  const restablecer = () => {
    setContador(0);
  };

  //js para la caja suma
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  const modificar1 = (e) => {
    setNumero1(e.target.value);
  };

  const modificar2 = (e) => {
    setNumero2(e.target.value);
  };

  //js para aficiones de reyes
  const reyes = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "la cria del escarabajo en almíbar",
    },
  ];

  const [mensaje, setMensaje] = useState();
  const [cont, setCont] = useState(0);

  const siguienteRey = () => {
    if (cont < reyes.length - 1) {
      setCont(cont + 1);
    } else {
      setCont(0);
    }
    setMensaje(
      <h3>
        La afición principal de{" "}
        <span className="rojo">{reyes[cont].nombre}</span> es{" "}
        <span className="verde">{reyes[cont].aficion}</span>
      </h3>
    );
  };

  //Variables para el ejercicio: TIPOS DE CAMBIO

  const tiposCambio=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ];

  //const [valores,setValores]=useState([0,0,0,0]);   No entiendo como funcionan los arrays con useState, habría que crear una copia...
  const [cantidad, setCantidad]=useState();
  const [valor1,setValor1] = useState();
  const [valor2,setValor2] = useState();
  const [valor3,setValor3] = useState();
  const [valor4,setValor4] = useState();

  const cambio=(e)=>{
    setValor1(e.target.value * tiposCambio[1].cambio);
    setValor2(e.target.value * tiposCambio[2].cambio);
    setValor3(e.target.value * tiposCambio[3].cambio);
    setValor4(e.target.value * tiposCambio[4].cambio);
  };

  return (
    <>
      <h1>Ejercicio de práctica</h1>
      <section>
        <h2>Ejercicio botones</h2>
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={restablecer}>Restablecer</button>
        <div>{contador}</div>
      </section>

      <h2>Ejercicio calculadora</h2>
      <section>
        <div className="cajaSuma">
          <input type="number" value={numero1} onChange={modificar1} />+
          <input type="number" value={numero2} onChange={modificar2} />
          <input type="number" readOnly value={resultado} />
          <button onClick={sumar}>Sumar</button>
        </div>
      </section>

      <section className="aficionesReyes">
        <h2>Ejercicio reemplazar texto de aficiones de reyes</h2>
        <button onClick={siguienteRey}>Ver Siguiente</button>
        <div>{mensaje}</div>
      </section>

      <section className="contenedorMonedas">
        <h2>Ejercicio Tipos de Cambio</h2>
        <label htmlFor="euros">{tiposCambio[0].moneda}</label>
        <input type="number" id="euros" placeholder="monto" onChange={cambio}/>

        <label htmlFor="pesoArg">{tiposCambio[1].moneda}</label>
        <input type="number" id="pesoArg" value={valor1} readOnly/> 

        <label htmlFor="pesoCol">{tiposCambio[2].moneda}</label>
        <input type="number" id="pesoCol" value={valor2} readOnly/>

        <label htmlFor="pesoMx">{tiposCambio[3].moneda}</label>
        <input type="number" id="PesoMx" value={valor3} readOnly/>

        <label htmlFor="dolar">{tiposCambio[4].moneda}</label>
        <input type="number" id="dolar" value={valor4} readOnly/>
      </section>

      <footer></footer>
    </>
  );
};

export default EjercicioVideo3;
