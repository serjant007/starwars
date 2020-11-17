import React from 'react';
import './main-page.css';
function MainPage() {
  return (
    <div>
      <h2 className="main-title">Welcome to StarWars API!</h2>
      <img
        className="main-image"
        src={`https://starwars-visualguide.com/assets/img/vehicles/33.jpg`}
        alt="character"
      />
    </div>
  );
}

export default MainPage;
