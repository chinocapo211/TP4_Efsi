import moneda from '../img/moneda.jpg'
import monitor from '../img/monitor.png';
import letras from '../img/letras.jpg';
function Conocimientos(){
    return(
        <div id="container3">
            <h1>Conocimientos</h1>
            <div class="flex">
            <div class="hoverImg">
                <h2>Informatica</h2>
                <img src={monitor} class="hoverr" alt='img4'/>
                <p class="hoverTexto">Se programar en python, Javascript, SQL, C# y C++. A parte puedo diseñar en HTML y CSS.</p>
            </div>
            <div class="hoverImg">
                <h2>Economia</h2>
                <img src={moneda} class="hoverr" alt='img5'/>
                <p class="hoverTexto">Tengo conocimientos basicos sobre economia e inversiones que aprendi de manera independiente y con un curso hecho en la secundaria.</p>
            </div>
            <div class="hoverImg">
                <h2>Idioma</h2>
                <img src={letras} class="hoverr" alt='img6'/>
                <p class="hoverTexto">Mi lengua nativa es el españo y tengo un nivel avanzado de ingles con el examen CAE aprobado.</p>
            </div>
            </div>
        </div>   
    );
}
export default Conocimientos;