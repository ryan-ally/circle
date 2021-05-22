import React from 'react';
import hero from './hero13.jpeg';

const Schedule = () => {
    return (
       <div>
          <button onclick="document.getElementById('myInput').value = ''" id="ho">Clear input field</button>
          <input type="text" value="Blabla" id="myInput" /><br />
          <img src={hero} className="App-hero13" alt="hero"/><br/>
          <br/>
          <h1>Schedule</h1>
          <p className="sponsor">Schedule coming soon!</p>
       </div>

    );
}
 
export default Schedule;