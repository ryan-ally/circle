import './App.css';
import Circle from './Circle.js';
import bg from './vg.jpeg';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Stats from './components/Stats';
import Roster from './components/Roster';
import Schedule from './components/Schedule';
import Sponsor from './components/Sponsor';
import hero from './hero8.jpeg';
import Quote from './Quote.js';
import QuoteAndAuthor from './QuoteAndAuthor.js';
import QuotesDatabase from './QuotesDatabase.js';

function App() {
  return (   
      <BrowserRouter>
            <Navigation />
            <hr className="new2"/>
            <hr className="new1"/>
            <Quote />
            <br/>
            <Switch>
            <Route path="/contact" component={Contact}/>           
            <Route path="/stats" component={Stats}/>
            <Route path="/roster" component={Roster}/>            
            <Route path="/schedule" component={Schedule}/>            
            <Route path="/sponsor" component={Sponsor}/>
          </Switch>
          <img src={hero} className="App-hero8" alt="hero"/><br/>
          <hr className="new1"/>
          <hr className="new1"/><br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1 className="bird">Welcome to the opening spring....</h1>
           <div id="Circle">
          <Circle />
          </div>
     <img src={bg} className="App-vg" alt="vg" />
     <h2><u><i><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Schedule!</a></i></u></h2>
     <hr className="new1"/>
     <h2 className="last"><i><u><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Teams!</a></u></i></h2>
     <table>
       <thead>2021 Roster:</thead>
       <hr className="new1"/>
       <ol>
       <li><td><a href="http://avmabl.wttbaseball.pointstreak.com/player.html?playerid=1351949&seasonid=32167">Ryan:</a><u>P,SS</u></td></li><br/>
       <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Julian:</a><u>3B</u></td></li><br/>
       <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Greg:</a><u>CF</u></td></li><br/>
       <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Tommy:</a><u>RF</u></td></li><br/>
       <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Manny:</a><u>P,U</u></td></li><br/>
        <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Mike:</a><u>1B,CP</u></td></li><br/>
        <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Danny:</a><u>LF</u></td></li><br/>
        <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Eric:</a><u>2B</u></td></li><br/>
        <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Matt:</a><u>SS,P</u></td></li><br/>
        <li><td><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">JJ:</a><u>C</u></td></li><br/>
       </ol>
       <hr className="new1"/>
       </table>
       <hr className="new1"/>
       <h2><i><u><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Standings!</a></u></i></h2>
       <h3><i><u><a href="http://avmensbaseball.pointstreaksites.com/view/avmensbaseball/">Statistics!</a></u></i></h3>
          <footer id="bar"><br/>
          <br/>
   <p className="hole"><span>Designed by:</span><a href="https://ryans-dandy-project-72082e.webflow.io/">RH HAMMERDICK</a></p>
     <h4>@All_copy_2021</h4>
   </footer>
             </BrowserRouter>

 
 
     
  );
}

export default App;
