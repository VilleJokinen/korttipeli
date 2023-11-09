
export default function Card({card, selectedStat, handleSelect}){
    if(!card) return <div className="card" />;
    

    return (
        <div className="card back">
            <img src={card.image} />
            <ul className="stat-list">
                {card.stats.map((stat, index) => (
                    <li className="stat-list-item" onClick={()=>handleSelect(index)} key={index}>
                        <span>{stat.name}</span>
                        <span>{stat.value}</span>
                    </li>
                ))}

                
                
            </ul>
            
        </div>
        
    );
}