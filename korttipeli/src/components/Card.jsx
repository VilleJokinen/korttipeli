
export default function Card({card}){
    return(
        <div className="card">
            <img src={card.image} />
            <ul className="stat-list">
                <li className="stat-list-item">
                    <span>Looks</span>
                    <span>9</span>
                </li>
                <li className="stat-list-item">
                    <span>Speed</span>
                    <span>8</span>
                </li>
            </ul>
            
        </div>
        
    );
}