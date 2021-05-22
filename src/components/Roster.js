import React from 'react';
import hero from './hero70.jpeg';

const Roster = () => {
    return (
       <div>
          <button onclick="document.getElementById('myInput').value = ''" id="ho">Clear input field</button>
          <input type="text" value="Blabla" id="myInput" /><br />
          <img src={hero} className="App-hero70" alt="hero"/><br/>

          <br/>
          <h1>Roster</h1>
          <p className="sponsor">Roster and line up please see Home page for more info.</p>
       </div>

    );
}
 
export default Roster;