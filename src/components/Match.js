import React from 'react'; //optional

function Match() {
  return (
    <article className="Match">
      <h1>Joe <span>vs</span> Bob</h1>
      {/* To be shown when there is a winner */}<h2>Joe is the winner by 1!</h2>
      {/* To be shown when there is no winner */}<h2>No winners yet!</h2>
    </article>

  );
}

function submit(e) {
  e.preventDefault();
  console.log(`The mouse coordinates of this click e are: x: ${e.screenX} and y: ${e.screenY}`);
}

function showTxt(e) {
  // e.preventDefault();
  console.log(e);
}

export default Match;;;