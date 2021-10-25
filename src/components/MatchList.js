import React from 'react'; //optional
import Match from './Match';
// import matchData from '../data/matchData';

// function MatchList(props) {
  
//   const oneMatch = props[0];
//   return (
//     <section className="PlayerList MatchList">
//       <h1>Match list</h1>
//       <Match {...oneMatch} />
//     </section>
//   );
// }

function MatchList(props) {
  const matchData = Object.values(props);
  const parsedMatches = matchData.map(match => <Match  {...match} />);
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  );
}
export default MatchList;