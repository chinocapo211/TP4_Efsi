import moneda from '../img/moneda.jpg'
import monitor from '../img/monitor.png';
import letras from '../img/letras.jpg';
function Conocimientos(){
    return(
        <div id="container3">
            <h1>Conocimientos</h1>
            <div class="flex">
            <div class="hoverImg">
                <img src={monitor} id="img4" alt='img4'/>
                <p class="hoverTexto">Se programar en python, Javascript, SQL, C#, C++, HTML y CSS. Tengo un nivel avanzado de ingles con el examen CAE aprobado.</p>
            </div>
            <div class="hoverImg">
                <img src={moneda} id="img5" alt='img5'/>
                <p class="hoverTexto">a</p>
            </div>
            <div class="hoverImg">
                <img src={letras} id="img6" alt='img6'/>
                <p class="hoverTexto">a</p>
            </div>
            </div>
            
        </div>   
    );
}
export default Conocimientos;