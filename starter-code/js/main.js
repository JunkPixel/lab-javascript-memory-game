const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

function print() {
  document.getElementById('pairs_clicked').innerText = memoryGame.pairsClicked;
  document.getElementById('pairs_guessed').innerText = memoryGame.pairsGuessed;
}

function playAgain() {
  memoryGame.pairsClicked = 0;
  memoryGame.pairsGuessed = 0;
  memoryGame.shuffleCards();
  document.querySelector('#memory_board').innerHTML = '';
}

function play() {
  for (let pic of memoryGame.cards) {
    document.querySelector('#memory_board').innerHTML += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  }
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);
      if (memoryGame.pickedCards.length === 2) {
        if (
          memoryGame.checkIfPair(
            memoryGame.pickedCards[0].getAttribute('data-card-name'),
            memoryGame.pickedCards[1].getAttribute('data-card-name')
          )
        ) {
          memoryGame.pickedCards.pop();
          memoryGame.pickedCards.pop();
        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
            memoryGame.pickedCards.pop();
            memoryGame.pickedCards.pop();
          }, 500);
        }
        print();
      }
      // should do a finished with message and so you can reset
      console.log('Card clicked: ', card);
    });
  });
}

window.addEventListener('load', event => {
  playAgain();
  play();
});