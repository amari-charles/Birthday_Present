import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Confetti from "react-confetti";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <div className="header">Happy Birthday Vincent!</div>
      <Confetti recycle={false} numberOfPieces={800} />
      <div className="page-container">
        <CardList></CardList>
      </div>
    </div>
  );
}

export default App;
