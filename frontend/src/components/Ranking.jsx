// src/components/Ranking.jsx

import React from 'react';
import './Ranking.css'; // Certifique-se de criar este arquivo CSS

const Ranking = ({ users }) => {
  // Ordena os usuários pelo número de trocas e pega os top 5
  const topUsers = [...users].sort((a, b) => b.exchanges - a.exchanges).slice(0, 5);

  return (
    <div className="ranking">
      <h2>Ranking de Trocadores</h2>
      <ul className="ranking-list">
        {topUsers.map((user, index) => (
          <li key={user.id} className="ranking-item">
            <div className="ranking-photo">
              <img src={user.photo} alt={user.name} />
              <div className="ranking-position">{index + 1}</div>
            </div>
            <div className="ranking-info">
              <p className="ranking-name">{user.name}</p>
              <p className="ranking-location">{user.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
