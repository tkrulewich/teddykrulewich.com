
import "./MainMenu.css";
import { NavLink, useLocation } from 'react-router-dom';


function MenuItem(props)
{
  let location = useLocation().pathname;
  const active = (location == props.to);

  if (active)
  {
    return <div className="menuItem menuItemActive"><NavLink to={props.to}>{props.children}</NavLink></div>    
  }
  else {
    return <div className="menuItem"><NavLink to={props.to}>{props.children}</NavLink></div>
  }
}

export function MainMenu(props)
{


  return (
    <ul className='mainMenu'>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/Software">Software</MenuItem>
      <MenuItem to="/Music">Music</MenuItem>
      <MenuItem to="/Contact">Contact</MenuItem>
    </ul>

  );
}