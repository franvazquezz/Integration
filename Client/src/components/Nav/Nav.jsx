import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import {Link, NavLink} from 'react-router-dom'

const Nav = ({onSearch}) => {
    return (
        <div className= {style.nav}>
            <Link to='/home'>
            <button className={style.glowonhover}>Home</button>
            </Link>
            <NavLink to='/about'>
            <button className={style.glowonhover}>About</button>
            </NavLink>
            <NavLink to='/favorites'>
            <button className={style.glowonhover}>Favorites</button>
            </NavLink>
            <SearchBar onSearch={onSearch}/>
            <Link to='/'>
            <button className={style.glowonhover}>LogOut</button>
            </Link>
            </div>
    )
}

export default Nav;