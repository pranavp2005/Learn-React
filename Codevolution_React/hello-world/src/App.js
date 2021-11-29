import logo from './logo.svg';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Greet name= "Clark" superheroname="Super Man">
        <p> This is props chilren</p>
      </Greet>
      <Greet name= "Bruce" superheroname="Bat Man">
        <button>Action</button>
        </Greet>
      <Greet name= "Diana" superheroname="Wonder Woman"/>
      <Welcome name= "Clark" superheroname="Super Man"/> 
      <Welcome name= "Bruce" superheroname="Bat Man"/>
      <Welcome name= "Diana" superheroname="Wonder Woman"/> */}
      {/* <Hello /> */}
      <Message />
    </div>
  )
}

export default App;
