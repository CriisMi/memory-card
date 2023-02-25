import { useEffect, useState } from "react";
import CardsSelection from "./components/CardsSelection";
import GameInfo from "./components/GameInfo";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guessedCards, setGuessedCards] = useState([]);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  useEffect(() => {
    setScore(0);
    if (!playing) {
      setPlaying(!playing);
      setGuessedCards([]);
    }
  }, [playing]);

  return (
    <div className="App">
      <GameInfo score={score} bestScore={bestScore} />
      <CardsSelection
        score={score}
        setScore={setScore}
        guessedCards={guessedCards}
        setGuessedCards={setGuessedCards}
        playing={playing}
        setPlaying={setPlaying}
      />
    </div>
  );
}

export default App;
