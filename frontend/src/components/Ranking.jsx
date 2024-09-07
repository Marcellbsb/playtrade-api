import React from 'react';
import './Ranking.css'; // CSS para estilizar o ranking

const Ranking = ({ users }) => {
  const topUsers = [...users].sort((a, b) => b.exchanges - a.exchanges).slice(0, 5);

  return (
    <div className="ranking">
      <h2>Ranking de Trocadores</h2>
      <ul className="ranking-list">
        {topUsers.map((user, index) => (
          <li key={user.id} className="ranking-item">
            <div className="ranking-photo">
              <img src={user.photo} alt={user.name} />
            </div>
            <div className="ranking-info">
              <p className="ranking-name">#{index + 1} {user.name}</p>
              <p>{user.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
