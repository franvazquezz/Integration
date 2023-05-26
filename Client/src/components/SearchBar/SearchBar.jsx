 import style from './SearchBar.module.css';
 import { useState } from 'react';

 const SearchBar = ({onSearch}) => {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }
   
   return (
      <div  className={style.search}>
         <input placeholder='Insertar ID' className={style.input}type='search' onChange={handleChange} value={id}/>
         <button className={style.glowonhover} onClick={() =>{onSearch(id)}}>Add...</button>
         <button className={style.glowonhover} onClick={() => onSearch(Math.floor(Math.random() * 826))}><span>Random</span></button>
      </div>
   );
}

export default SearchBar;