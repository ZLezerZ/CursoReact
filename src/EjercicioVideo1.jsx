import React from 'react'
import escudos from "./imagenes/escudos.png";
import hufflepuff from "./imagenes/hp.png"; //Importamos las imágenes y la asignamos a una variable
import ravenclaw from "./imagenes/rc.png";
import griffindor from "./imagenes/gf.png";
import slytherin from "./imagenes/sl.png"; //Importamos las imágenes y la asignamos a una variable
import "./EjercicioVideo1.css";
function EjercicioVideo1() {
    const nombreCasas = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    return (
        <div>
            <img src={escudos} className="molecula" />
            <main>
                <div className="tarjetasEscudos">
                    <span>
                        <img src={griffindor}></img>
                        <h3>{nombreCasas[0]}</h3>
                    </span>
                    <span>
                        <img src={hufflepuff}></img>
                        <h3>{nombreCasas[1]}</h3>
                    </span>
                    <span>
                        <img src={ravenclaw}></img>
                        <h3>{nombreCasas[2]}</h3>
                    </span>
                    <span>
                        <img src={slytherin}></img>
                        <h3>{nombreCasas[3]}</h3>
                    </span>
                </div>
            </main>
        </div>
    )
}

export default EjercicioVideo1
