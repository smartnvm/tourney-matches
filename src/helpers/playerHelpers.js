// input: playerData
export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};
// output: [{player}, {player}]


// input: playerDataArray, matchData
export const addWinsToPlayers = (playersArray, matchData) => {

  return playersArray.map(player => {
    let wins = 0;
    
    console.log(matchData)
    for (const match of matchData) {
      if (match.winner === player.gamerTag) {
        
        wins++;
      }

      player.wins = wins;


    }
    return player;

  });


};;

// output: [{player}, {player}] (each player having a win key and a numerical value)