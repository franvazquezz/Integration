import { connect } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterCards, orderCards, showAllCards } from "../../Redux/actions";
import style from "./Favorites.module.css"


const Favorites = ({myFavorites}) => {
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();
    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    }
    const handleFilter = (event)=>{
        if(event.target.value === "Any")dispatch(showAllCards(event.target.value));
        else dispatch(filterCards(event.target.value));
    }
    return (
        <div>
        <div className={style.cont}>
                <select className={style.selecti} onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select className={style.selectd} onChange={handleFilter}>
                    <option value="Any">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
        </div>
            
        <div className={style.conta}>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            status={fav.status}
                            gender={fav.gender}
                            image={fav.image}
                            origin={fav.origin}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps, null)(Favorites)