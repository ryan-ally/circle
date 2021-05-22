import React from 'react';
import hero from './hero15.jpeg';

const Sponsor = () => {
    return (
       <div>
          <button onclick="document.getElementById('myInput').value = ''" id="ho">Clear input field</button>
          <input type="text" value="Blabla" id="myInput" /><br />
          <img src={hero} className="App-hero15" alt="hero"/><br/>

          <br/>
          <h1>Contact US</h1>
          <p className="sponsor">Sponsor us! <u><b>before</b></u> any given sunday, if you and your buisness would like sponsor us or (make a small donation)  you will achieve advertiserment rights by way of patch on uniforms and/or 1sqft spot on giant dugout banner/dugout covering both for the whole season.<br/>NOTE! We change uniforms every season so if you always want a spot on either option provided please see sponsor page for more info.</p>
       </div>

    );
}
 
export default Sponsor;