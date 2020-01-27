class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    const shuffleFisherYates = cards => {
      let a = cards.length;
      while (a !== 0) {
        const b = Math.floor(Math.random() * a);
        a--;
        let c = cards[a];
        cards[a] = cards[b];
        cards[b] = c;
      }
      return cards;
    };
    shuffleFisherYates(this.cards);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
