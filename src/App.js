import "./App.css";
import escudos from "./imagenes/escudos.png";
import hufflepuff from "./imagenes/hp.png"; //Importamos las imágenes y la asignamos a una variable
import ravenclaw from "./imagenes/rc.png";
import griffindor from "./imagenes/gf.png";
import slytherin from "./imagenes/sl.png"; //Importamos las imágenes y la asignamos a una variable
function App() {
  //Aquí puedo crear variables

  var nombreCasas = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  return (
    //El java script se coloca entre llaves
    <div className="App">

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
  );
}

export default App;
