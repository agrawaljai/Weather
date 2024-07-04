import Card from "./components/Card";
import Input from "./components/input";
import Button from './components/Button';



import './App.css';
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();

  useEffect(() => {
    //Get current location here
    weather.fetchCurrentLocationData();
  },[])

  return (
    <div className="App">
      <h1 className="title">Weather Forecast</h1>
      <div>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
      <div>
        <Button onClick={weather.fetchCurrentLocationData} value="Refresh" />
      </div>
    </div>
  );
}

export default App;
