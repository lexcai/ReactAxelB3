import './App.css';
import Weather from './components/Weather/Weather';
import {useState} from 'react';

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      {/* <CityForm {...{city, setCity}} /> */}
      <Weather {...{city, setCity}} />

    </div>
  );
}

export default App;
