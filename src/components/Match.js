import React from 'react'; //optional

function Match(props) {
  const { players, winner, scoreDifference } = props;
  return (
    <article className="Match">
      <h1>{players[0]} <span>vs</span> {players[1]}</h1>
      {winner && <h2>{winner} is the winner by {scoreDifference} points!</h2>}
      {!winner && <h2>No winners yet!</h2>}
    </article>
  );
}
// function submit(e) {
//   e.preventDefault();
//   console.log(`The mouse coordinates of this click e are: x: ${e.screenX} and y: ${e.screenY}`);
// }

// function showTxt(e) {
//   // e.preventDefault();
//   console.log(e);
// }

export default Match;