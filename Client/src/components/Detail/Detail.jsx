import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data); 
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={style.contenedor}>
            <div className={style.izq}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className={style.name}> {character.name && character.name}</h1>
                <h3 className={style.status}> Status: {character.status && character.status}</h3>
                <h3 className={style.status}> Species: {character.species && character.species}</h3>
                <h3 className={style.status}> Gender: {character.gender && character.gender}</h3>
                <h3 className={style.status}> Origin: {character.origin?.name && character.origin?.name}</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className={style.der}>
                <img alt="" className={style.image} src={character.image && character.image}/>
            </div>
        </div>
    )
}

export default Detail