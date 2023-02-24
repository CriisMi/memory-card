import { useEffect, useState } from "react";
import CardsSelection from "./components/CardsSelection";
import GameInfo from "./components/GameInfo";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [guessedCards, setGuessedCards] = useState([]);

  useEffect(() => {
    const updateScore = (e) => {
      let card = parseInt(e.target.id);
      if (!isNaN(card)) {
        if (!guessedCards.includes(card)) {
          setGuessedCards((guessedCards) => [...guessedCards, parseInt(card)]);
          setScore(score + 1);
        } else {
          console.log("end");
        }
      }
    };

    document.addEventListener("click", updateScore);
    return () => {
      document.addEventListener("click", updateScore);
    };
  });

  return (
    <div className="App">
      <GameInfo score={score} bestScore={bestScore} />
      <CardsSelection
        score={score}
        setScore={setScore}
        guessedCards={guessedCards}
      />
    </div>
  );
}

export default App;
