import { useState } from "react";
import style from  './Form.module.css'
import validation from './validation'
import morty from './morty.jpg'

const Form = ({login}) =>{
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(validation({...userData, [event.target.name]: event.target.value}))};
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }
    return (
        <div className={style.form}>
            <br />
            <br />
            <h1 className={style.shake}>Rick and Morty PI</h1>
            <img alt="" className={style.img}src={morty}/>
            <h1 className={style.font}>Login</h1>
            <form onSubmit={handleSubmit}>
                <label className={style.label} htmlFor="email">Email: </label>
                <input className={style.input} placeholder='Insert username' type='text' onChange={handleChange}value={userData.email} name="email"/>
                {errors.e1 ? (<p>{errors.e1}</p>)
                : errors.e2 ? (<p>{errors.e2}</p>) 
                :(<p>{errors.e3}</p> )} 
                <label className={style.label} htmlFor="password">Password: </label>
                <input className={style.input} placeholder='Insert password' type='password' onChange={handleChange} value={userData.password} name="password"/>
                {errors.p1 ? <p>{errors.p1}</p>
                : <p>{errors.p2}</p> }
                <button className={style.boton}> Submit </button>
            </form>
        </div>
    )
}

export default Form;