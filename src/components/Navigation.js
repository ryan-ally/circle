import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="button">
          <button><NavLink to="/">Home</NavLink></button>
          <button><NavLink to="/contact">Contact</NavLink></button>
          <button><NavLink to="/stats">Stats</NavLink></button>
          <button><NavLink to="/roster">Roster</NavLink></button>
          <button><NavLink to="/schedule">Schedule</NavLink></button>
          <button><NavLink to="/sponsor">Sponsor</NavLink></button>




       </div>
    );
}
 
export default Navigation;