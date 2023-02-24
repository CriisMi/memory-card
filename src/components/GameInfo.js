const GameInfo = (props) => {
  return (
    <div>
      <div>Current Score: {props.score}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  );
};

export default GameInfo;
