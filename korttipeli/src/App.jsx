import './App.css'
import Card from './components/Card'
import {useState} from 'react'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const createCards = index => ({
    image: `http://placekitten.com/140/120?image=${index}`,
    stats: [
    { name: 'Looks', value: getRandomInt(1, 999) }, 
    { name: 'Speed', value: getRandomInt(1, 999) },
    {name: 'Weight', value: getRandomInt(1, 999) },
  ],
    id: crypto.randomUUID()
})

const playerCard = {
  image: "https://placekitten.com/120/100",
  stats: [
    { name: 'Looks', value: getRandomInt(1, 999) }, 
    { name: 'Speed', value: getRandomInt(1, 999) },
    {name: 'Weight', value: getRandomInt(1, 999) },
  ]

}

const opponentCard = {
  image: "https://placekitten.com/121/100",
  stats: [{ name: 'Looks', value: 18 },
          {name: 'Speed', value: 12}]
}





export default function App() {
  
  const[result, setResult] = useState('')

  function compareCards() {


    const playerStats = playerCard.stats[0];
    const opponentStats = opponentCard.stats[0];

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
        <Card card={playerCard} />
        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          <button type='button' onClick={compareCards}>Play</button>
        </div>
        <Card card={opponentCard} />
        
      </div>
      
    </div>
    
  );
}