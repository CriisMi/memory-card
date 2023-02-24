import Card from "./Card";
import returnToDisplayCards from "./returnToDisplayCards";

const CardsSelection = (props) => {
  let cards = [
    { background: "red", title: "red", description: "redcard" },
    { background: "blue", title: "blue", description: "bluecard" },
    { background: "yellow", title: "yellow", description: "yellowcard" },
    { background: "black", title: "black", description: "blackcard" },
    { background: "orange", title: "orange", description: "orangecard" },
    { background: "green", title: "green", description: "green" },
    { background: "grey", title: "grey", description: "greycard" },
    { background: "pink", title: "pink", description: "pinkcard" },
    { background: "bisque", title: "bisque", description: "bisquecard" },
    { background: "coral", title: "coral", description: "coralcard" },
  ];

  let guessedCards = [0, 1, 2, 3, 4, 5, 6, 7];

  let cardsToDisplay = returnToDisplayCards(cards, guessedCards);

  const listCards = cardsToDisplay.map((card) => (
    <li>
      <Card
        background={card.background}
        title={card.title}
        description={card.description}
      />
    </li>
  ));
  return <div>{listCards}</div>;
};

export default CardsSelection;
