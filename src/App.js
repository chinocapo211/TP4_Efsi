import './App.css';
import Mipersona from './components/Mipersona';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar'
import wave from './img/wave-bg.svg';
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
      <img src={wave} class='img2' alt="img2"/>
      <Mipersona/>
      
    </div>
  );
}

export default App;
