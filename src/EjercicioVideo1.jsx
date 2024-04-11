import React from 'react'
import escudos from "./imagenes/escudos.png";
import hufflepuff from "./imagenes/hp.png"; //Importamos las imágenes y la asignamos a una variable
import ravenclaw from "./imagenes/rc.png";
import griffindor from "./imagenes/gf.png";
import slytherin from "./imagenes/sl.png"; //Importamos las imágenes y la asignamos a una variable
import generico from "./imagenes/generico.png";
import "./EjercicioVideo1.css";
function EjercicioVideo1() {
    var nombreCasas = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

    const cambiarImagen = (e) => {
        if (e.target.src.includes("generico")) {
            e.target.style.visibility = "hidden";
        } else {
            e.target.src = generico;
            e.target.parentNode.style.backgroundColor = "white";
        }
    }
    const cambiarTexto = (z) => {
        if (z.target.innerHTML.includes("Visto")) {
            z.target.style.visibility = "hidden";
        } else {
            z.target.innerHTML = "Visto";
        }
    }
    return (
        //El java script se coloca entre llaves
        <div className="App">

            <img src={escudos} className="escudo" />

            <main>
                <div className="tarjetasEscudos">
                    <span>
                        <img src={griffindor} onClick={cambiarImagen}></img>
                        <h3 onClick={cambiarTexto}>{nombreCasas[0]}</h3>
                    </span>
                    <span>
                        <img src={hufflepuff} onClick={cambiarImagen}></img>
                        <h3 onClick={cambiarTexto}>{nombreCasas[1]}</h3>
                    </span>
                    <span>
                        <img src={ravenclaw} onClick={cambiarImagen}></img>
                        <h3 onClick={cambiarTexto}>{nombreCasas[2]}</h3>
                    </span>
                    <span>
                        <img src={slytherin} onClick={cambiarImagen}></img>
                        <h3 onClick={cambiarTexto}>{nombreCasas[3]}</h3>
                    </span>
                </div>
            </main>

        </div>
    );
}

export default EjercicioVideo1
