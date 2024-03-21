// 外部套件
import { useEffect, useState } from 'react';
import axios from 'axios';

// 內部套件
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
const [text, setText] = useState('');

const onChange = e => {setText(e.target.value)};

useEffect(() => {
  (async() => {
    const path = process.env.REACT_APP_PATH
    try {
      const result = await axios.get(path);
      console.log(result);
    } catch(err) {
      console.log(err);
    }
  })();
}, []);

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
        <button type="button" className="btn btn-dark">Dark</button>
        {text}
        <Input id="sampleText" text="這是一個 input"
          value={text} onChange={onChange}></Input>
      </header>
    </div>
  );
}

export default App;
