import './App.css'
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
  return {
    player: deck.slice(0, half),
    opponent: deck.slice(half)
  }
}

export default function App() {
  
  const[result, setResult] = useState('')
  const[cards, setCards] = useState(dealCards)
  
  function compareCards() {


    const playerStats = cards.player[0].stats[0];
    const opponentStats = cards.opponent[0].stats[0];

    if (playerStats.value > opponentStats.value) {
      setResult('win')
    }
    else if (playerStats.value < opponentStats.value) {
      setResult('loss')    }
    else {
      setResult('draw')
    }

  }
  
  return (
    <div>
      <h1>Card Game</h1>
      <div className='game'>
        <ul className='card-list'>
          {cards.player.map(playerC => (
            <li className='card-list-item player' key={playerC.id}>
              <Card card={playerC} />

            </li>
          ))}
        </ul>

        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          <button type='button' onClick={compareCards} className='play-button'>Play</button>
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