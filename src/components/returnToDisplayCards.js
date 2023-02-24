const returnToDisplayCards = (cards, guessedCards) => {
  let numberList = [];
  if (guessedCards.length === 10) {
    return cards;
  }

  do {
    let number = Math.floor(Math.random() * 10);
    if (!numberList.includes(number)) {
      numberList.push(number);
    }
  } while (numberList.length < 4);

  if (!numberList.every((item) => guessedCards.includes(item))) {
    do {
      let number = Math.floor(Math.random() * 10);
      if (!numberList.includes(number)) {
        let insertIndex = Math.floor(Math.random() * 6);
        numberList.splice(insertIndex, 0, number);
      }
    } while (numberList.length < 5);
  } else {
    do {
      let number = Math.floor(Math.random() * 10);
      if (!numberList.includes(number) && !guessedCards.includes(number)) {
        numberList.push(number);
      }
    } while (numberList.length < 5);
  }

  let cardsToDisplay = numberList.map((i) => cards[i]);
  return cardsToDisplay;
};

export default returnToDisplayCards;
