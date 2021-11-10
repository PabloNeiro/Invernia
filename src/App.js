import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './router/Router';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
