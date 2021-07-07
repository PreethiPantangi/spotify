import './App.css';
import CoreComponent from './core/core'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CoreComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
