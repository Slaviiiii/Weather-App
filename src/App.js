import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Weather } from './contexts/WeatherContext';

function App() {
  return (
    <Weather>
    	<div className='container'>
        	<Header />
        	<Main />
      	</div> 
    </Weather>
  );
}

export default App;
