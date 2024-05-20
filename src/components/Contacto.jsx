import correo from '../img/images.png';
function Contacto(){
    return(
        <div id="container4"> 
            <h1>Contactame!</h1>
            <div id="conta">
                <img src={correo} alt="img7"/>
                <h3>felipe.blaustein@gmail.com</h3>
            </div>
        </div>
    );
}
export default Contacto;