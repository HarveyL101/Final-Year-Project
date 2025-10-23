import './App.css';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <h1>Testing Section</h1>
        <Navbar />
      </div>
      <h1>Project Header</h1>
      <div className="card">
        <p>
          This is the start of my final year project
        </p>
      </div>
      <p className="read-the-docs">
        Check the <code>README.md</code> for more information :)
      </p>
    </>
  )
}

export default App
