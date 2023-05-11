import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import {Link, NavLink} from 'react-router-dom'

const Nav = ({onSearch}) => {
    return (
        <div className= {style.nav}>
            <Link to='/home'>
            <button className={style.home}>Home</button>
            </Link>
            <NavLink to='/about'>
            <button className={style.about}>About us</button>
            </NavLink>
            <NavLink to='/favorites'>
            <button className={style.about}>Favorites</button>
            </NavLink>
            <SearchBar onSearch={onSearch}/>
            </div>
    )
}

export default Nav;