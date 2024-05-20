import yo from "../img/yo.jpg";
function Mipersona(){
    return(
        <div id="container2">
            <div class="izquierda">
                <h1>Un poco de mi</h1>
                <p>Tengo una pasion por el deporte y el entrenamiento, es lo que hace que mi semana se pase rapido y siempre me hace feliz. Me gustan los juegos de computadora, las peliculas y juntarme con mis amigos a hacer cualquier cosa. Naci el 12 de marzo del 2007.</p>
                <h1>Mi educacion</h1>
                <p>Comencé mi trayectoria en la Primaria Martin Buber y luego continué en la Secundaria ORT, donde elegí la orientación de informática. Para ampliar mis conocimientos, realicé un curso en Digital House sobre diseño web, una experiencia que me permitió explorar aún más mi pasión por la tecnología y la creatividad en línea. Por ultimo, dentro del ambiente escolar de la secundaria hice varios cursos de google sobre inteligencias artificiales y servidores a parte de haber participado en las olimpiadas de informatica.</p>
            </div>
            <img src={yo} id='img3' alt="img3"/> 
      </div>
    );
}
export default Mipersona;