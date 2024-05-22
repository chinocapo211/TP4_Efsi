import correo from '../img/images.png';

function Contacto() {
  return (
    <div id="container4"> 
      <h1>Contactame!</h1>
      <div id="contacto_todo">
      <div className="card-container">
        <div id="conta" className="card">
          <div className="card-front">
            <img src={correo} alt="img7"/>
          </div>
          <div className="card-back">
            <h3>felipe.blaustein@gmail.com</h3>
          </div>
        </div>
      </div>
      <form id="contact-form" method="post">
              <input type="text" name="name" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Correo electrónico" required />
              <input type="text" name="message" placeholder="Mensaje" required></input>
              <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
