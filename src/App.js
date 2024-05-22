import './App.css';
import Mipersona from './components/Mipersona';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar'
import wave from './img/wave-bg.svg';
import Conocimientos from './components/Conocimiento';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
function App(props) {
    window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-container');
    if (window.scrollY > 0) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });
  return (
    <div>
      <Navbar/>
      <Inicio/>
      <img src={wave} id='img2' alt="img2"/>
      <Mipersona/>
      <p id="lugar">no estoy</p>
      <Conocimientos/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
