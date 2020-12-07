import logo from './logo.svg';
import mike from './Mike.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mike} className="App-logo" alt="mike" />
        <p>
          Hi, I am Mike
        </p>
      </header>
    </div>
  );
}

export default App;
