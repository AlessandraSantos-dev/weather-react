import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App-Wrap">
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
          <WeatherSearch />
        </header>
      </div>
      <footer className="website-info">
        Coded by Alessandra Santos and open sourced on
        <a
          href="https://github.com/AlessandraSantos-dev/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub.
        </a>
      </footer>
    </div>
  );
}

export default App;
