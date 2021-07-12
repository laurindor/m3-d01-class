import logo from './logo.svg';

import Greeting from "./components/Greeting"
import Bootcamp from './components/Bootcamp'

import './App.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
    
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Greeting name='Marco' age={20} cohort='IronHack Barcelona' />
       {/*( <Bootcamp cohort='IronHack Barcelona' />)*/}
        <Greeting name="Fede" age={30} />

      </header>
    
    </div>
  );
}

export default App;
