import "./App.css";
import "./Footer.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="Weather-App">
      <div className="container">
        <Weather defaultCity="Glasgow" />
        <footer>
          This project was coded by Hannah Rusk{" "}
          <a
            href="https://github.com/hanr1993/week5-react-app"
            target="_blank"
            rel="noreferrer"
          >
            and is open sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
