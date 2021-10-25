import React from 'react'; //optional
import Player from './Player';
// import playerData from '../data/playerData';
// import matchData from '../data/matchData';


function PlayerList(props) {
  const playersData = Object.values(props);
  const parsedPlayers = playersData.map(player => <Player {...player} />);
  
  
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
      {parsedPlayers}
  </section>
  );
}

export default PlayerList;