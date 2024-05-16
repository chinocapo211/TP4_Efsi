import './App.css';
import Imagen from './components/Imagen.jsx'
import computer from './img/hello3.svg'
import TextoPri  from './components/TextoPri';
import wave from './img/wave-bg.svg';


function App(props) {
  return (
    <div>
      <div class="container1">
        <img src={computer} class='img1' alt="img1"/> 
        <TextoPri class="text"/>
      </div>
      <div class="container2">
        <div>
          <img src={wave} class='img2' alt="img2"/>
        </div>
       
      </div>
      <div class="container1">
        
      </div>
    </div>
  );
}

export default App;
