import React from 'react'; //optional

function PlayerList(players) {
  return (
    <section className="PlayerList">
    <h1>Current participating players</h1>
      {/* Players will be shown here */}
     
    
      for (const player in players) {

        <h2> player </h2>
        
      }

  </section>


  );
}

export default PlayerList;