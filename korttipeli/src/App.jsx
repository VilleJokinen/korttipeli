import './App.css'
import PlayButton from './components/PlayButton';
import Card from './components/Card'
import {useState} from 'react'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);



const playerCard = {
  image: "https://placekitten.com/120/100",
  stats: [
    { name: 'Looks', value: getRandomInt(1, 999) }, 
    { name: 'Speed', value: getRandomInt(1, 999) },
    {name: 'Weight', value: getRandomInt(1, 999) },
  ]

}

const opponentCard = {
  image: "https://placekitten.com/120/100",
  stats: [{ name: 'Looks', value: 18 },
          {name: 'Speed', value: 12}]
}

const createCard = index => ({
    image: `http://placekitten.com/120/100?image=${index}`,
    stats: [
    { name: 'Looks', value: getRandomInt(1, 999) }, 
    { name: 'Speed', value: getRandomInt(1, 999) },
    {name: 'Weight', value: getRandomInt(1, 999) },
  ],
    id: crypto.randomUUID()
})

const deck = Array(16).fill(null).map((_,index)=>createCard(index))
const half = Math.ceil(deck.length / 2)

const dealCards = () => {
  shuffle(deck)
  return {
    player: deck.slice(0, half),
    opponent: deck.slice(half)
  }
}

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export default function App() {
  
  const[result, setResult] = useState('')
  const[cards, setCards] = useState(dealCards)
  
  const [gameState, setGameState] = useState('play');

  const [selectedStat, setSelected] = useState[0];


  function compareCards() {


    const playerStats = cards.player[0].stats[selectedStats];
    const opponentStats = cards.opponent[0].stats[selectedStats];

    if (playerStats.value > opponentStats.value) {
      setResult('win')
    }
    else if (playerStats.value < opponentStats.value) {
      setResult('loss')    }
    else {
      setResult('draw')
    }

    setGameState('result')

  }

  function nextRound() {
    setCards(cards => {
      const playedCards = [{ ...cards.player[0] }, { ...cards.opponent[0] }]
      const player = cards.player.slice(1)
      const opponent = cards.opponent.slice(1)
      if (result === 'draw') {
        return {
          player,
          opponent
        }
      }
      if (result === 'win')
      {
        return {
          player: [...player, ...playedCards],
          opponent
        };
      }
      if (result === 'loss')
      {
        return {
          opponent: [...opponent, ...playedCards],
          player
        };
      }
      return cards;
      
    })
    setGameState('play')
    setResult('')
  }
  
  return (
    <div>
      <h1>Card Game</h1>
      <div className='game'>
        <ul className='card-list'>
          {cards.player.map((playerC,index) => (
            <li className='card-list-item player' key={playerC.id}>
              <Card card={index === 0 ? playerC : null} handleSelect={statIndex => gameState === 'play' && setSelected(statIndex)} selectedStat={selectedStat} />

            </li>
          ))}
        </ul>

        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          {
            gameState === 'play' ? (<PlayButton text={'Play'} handleClick={compareCards} />) : (<PlayButton text={'Play'} handleClick={nextRound} />)


          }
        </div>

        <ul className='card-list opponent'>
          {cards.opponent.map(opponentC => (
            <li className='card-list-item opponent' key={opponentC.id}>
              <Card card={opponentC} />

            </li>
          ))}
        </ul>

      </div>
      
    </div>
    
  );
}