import Card from "./Card";
import returnToDisplayCards from "./returnToDisplayCards";
import "./CardsSelection.css";

const CardsSelection = (props) => {
  let cards = [
    { background: "#92140C", title: "red", description: "Peen red", key: "0" },
    {
      background: "#004777",
      title: "blue",
      description: "Indigo dye",
      key: "1",
    },
    {
      background: "#F5EE9E",
      title: "yellow",
      description: "Vanilla",
      key: "2",
    },
    {
      background: "#191919",
      title: "black",
      description: "Eerie black",
      key: "3",
    },
    {
      background: "#faa916",
      title: "orange",
      description: "Orange",
      key: "4",
    },
    {
      background: "#3c896d",
      title: "green",
      description: "Viridian",
      key: "5",
    },
    {
      background: "#C8BFC7",
      title: "grey",
      description: "French gray",
      key: "6",
    },
    { background: "#D496A7", title: "pink", description: "Puce", key: "7" },
    {
      background: "#420039",
      title: "purple",
      description: "Dark purple",
      key: "8",
    },
    {
      background: "#66C7F4",
      title: "light blue",
      description: "Light Sky Blue",
      key: "9",
    },
  ];

  let guessedCards = props.guessedCards;

  let cardsToDisplay = returnToDisplayCards(cards, guessedCards);

  const listCards = cardsToDisplay.map((card) => (
    <li key={card.key}>
      <Card
        background={card.background}
        title={card.title}
        description={card.description}
        id={card.key}
        score={props.score}
        setScore={props.setScore}
        guessedCards={guessedCards}
        setGuessedCards={props.setGuessedCards}
        playing={props.playing}
        setPlaying={props.setPlaying}
      />
    </li>
  ));
  return (
    <div>
      <ul className="cards">{listCards}</ul>
    </div>
  );
};

export default CardsSelection;
