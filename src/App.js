import logo from './logo.svg';
import './App.css';
import match_data from './database/match_data';
import player_data from './database/player_data';

import PlayerList from './components/PlayerList';
import Player from './components/Player';
import Match from './components/Match';
import MatchList from './components/MatchList';


function App() {

  const gamerTag = 'Disguised Lizard';
  return (
    <div className="App">

    --------player -------------------
      <Player />
      ---------player list------------------

      <PlayerList />

      ------------Match---------------

      <Match />
      ------------Match List---------------
      <MatchList />
      


      
    </div>
  );
}

export default App;
