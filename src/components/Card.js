const Card = (props) => {
  let score = props.score;
  let setScore = props.setScore;
  let setGuessedCards = props.setGuessedCards;
  let guessedCards = props.guessedCards;
  let playing = props.playing;
  let setPlaying = props.setPlaying;

  const updateGuessedCards = (e) => {
    if (playing) {
      let card = parseInt(e.target.id);
      if (!guessedCards.includes(card)) {
        setGuessedCards((guessedCards) => [...guessedCards, card]);
        setScore(score + 1);
      } else {
        setPlaying(!playing);
      }
    }
  };

  return (
    <div>
      <div
        onClick={updateGuessedCards}
        id={props.id}
        className="image"
        style={{
          backgroundColor: `${props.background}`,
          width: "150px",
          height: "200px",
        }}
      ></div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default Card;
