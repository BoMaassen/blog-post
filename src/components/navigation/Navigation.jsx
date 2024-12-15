import {NavLink} from "react-router-dom";
import logoMedium from "../../assets/logo-medium.png";
import './Navigation.css';

function Navigation(){
    return(
        <nav className="nav-bar">
            <span className="img-wrapper"><img className="nav-logo" src={logoMedium} alt="logo"/></span>
            <ul className="nav-list">
               <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/">Home</NavLink></li>
               <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/overview">Alle posts</NavLink></li>
               <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/new-post">Nieuwe post maken</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;