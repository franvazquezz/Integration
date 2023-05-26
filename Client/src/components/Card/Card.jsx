import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
   const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites )
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({id, name, status, species, gender, origin, image, onClose}))
      };
   }
   
   useEffect(() => {
      myFavorites.forEach(fav => {
         if (fav.id === id) {
            setIsFav(true); 
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={style.contenedor}>
        <div className={style.contenedor__content}> 
         {
          (<button className={style.fav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>) 
         }
         <h3 className={style.id}>{id}</h3>
         <button className={style.botonClose}onClick={()=>{onClose(id)}}>x</button>
         <Link to={`/detail/${id}`}>
            <img className={style.imagen} src={image} alt='' />
         </Link>
         <h1 className={style.name}>{name}</h1>
         <h3 className={style.status}>{status}</h3>
         <h3 className={style.gender}>{gender}</h3>
         </div></div>
   );
};

export default Card