import computer from '../img/hello3.svg'

function Inicio(){
    return(
        <div id="container1">
        <img src={computer} class='img1' alt="img1"/> 
        <h1>Bienvenido a mi portafolio!</h1>
        <h1>Mi nombre es Felipe Blaustein</h1>
        </div>
    );
}
export default Inicio;