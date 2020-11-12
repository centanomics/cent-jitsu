const elements = ["coin", "bill", "gold"]
const colors = ["BA2D0B", "3EC300", "000500", "B084CC", "2F52E0", "3A405A"]
//numbers 2-12
// 66

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const randomDeck = () => {
  let returnDeck = [];

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      for (let k = 2; k < 13; k++) {
        returnDeck.push({
          element: elements[i],
          color: colors[j],
          number: k
        })
      }
    }
  }

  shuffle(returnDeck);
  return returnDeck;
}

module.exports = randomDeck