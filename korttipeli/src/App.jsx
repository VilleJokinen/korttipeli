import './App.css'
import Card from './components/Card'
const playerCard = {
  image: "https://placekitten.com/120/100",
  stats: [{ name: 'Looks', value: 10 },
          {name: 'Speed', value: 9}]

}

const opponentCard = {
  image: "https://placekitten.com/121/100",
  stats: [{ name: 'Looks', value: 18 },
          {name: 'Speed', value: 12}]
}





export default function App() {
  
  function compareCards() {
    const playerStats = playerCard.stats[0];
    const opponentStats = opponentCard.stats[0];
    let result = '';

    if (playerStats.value > opponentStats.value) {
      result = 'win';
    }
    else if (playerStats.value < opponentStats.value) {
      result = 'loss';
    }
    else {
      result = 'draw';
    }

    console.log(result)
  }
  
  return (
    <div>
      <h1>Hello World</h1>
      <Card card={playerCard} />
      <Card card={opponentCard} />
      <button type='button' onClick={compareCards}>Play</button>
    </div>
    
  );
}