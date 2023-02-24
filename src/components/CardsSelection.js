import Card from "./Card";
import returnToDisplayCards from "./returnToDisplayCards";

const CardsSelection = (props) => {
  let cards = [
    { background: "red", title: "red", description: "redcard", key: "0" },
    { background: "blue", title: "blue", description: "bluecard", key: "1" },
    {
      background: "yellow",
      title: "yellow",
      description: "yellowcard",
      key: "2",
    },
    { background: "black", title: "black", description: "blackcard", key: "3" },
    {
      background: "orange",
      title: "orange",
      description: "orangecard",
      key: "4",
    },
    { background: "green", title: "green", description: "green", key: "5" },
    { background: "grey", title: "grey", description: "greycard", key: "6" },
    { background: "pink", title: "pink", description: "pinkcard", key: "7" },
    {
      background: "bisque",
      title: "bisque",
      description: "bisquecard",
      key: "8",
    },
    { background: "coral", title: "coral", description: "coralcard", key: "9" },
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
      />
    </li>
  ));
  return (
    <div>
      <ul>{listCards}</ul>
    </div>
  );
};

export default CardsSelection;
