import React, {useState} from 'react';
import './Leaderboard.css';
import { useEffect } from 'react';

function Leaderboard({ initialScores }) {
  const [scores, setScores] = useState(initialScores);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const handleSort = (key) => {
    // This logic should set the new sorting configuration
    let direction = 'ascending';
    setSortConfig({ key, direction });
  };
  
  // This logic to sort the scores is intentionally flawed
  const sortedScores = initialScores.sort((a, b) => {
    if (sortConfig.key == 'score') {
      return a.score - b.score;
    }else{
       return a.name.charCodeAt() - b.name.charCodeAt();
    }
});

useEffect(()=>{
    setScores(sortedScores)
},[sortConfig])
  

  return (
    <div className="leaderboard-container">
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th onClick={()=>handleSort('name')}>Name</th>
            <th onClick={()=>handleSort('score')}>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((player, index) => (
            <tr key={player.id}>
              <td>{index}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;