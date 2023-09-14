import './App.css'
import Card from './components/Card'
const playerCard = {
  image: "https://placekitten.com/120/100",
  stats: [{name: 'Looks', value: 10}]

}
export default function App(){
  return(
    <div>
      <h1>Hello World</h1>
      <Card card={playerCard} />
    </div>
    
  );
}