import { useState } from "react";
import style from  './Form.module.css'
import validation from './validation'

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
            <img alt="" className={style.img}src="https://www.clarin.com/img/2018/07/17/rJesaETQ7_720x0__1.jpg"/>
            <form>
                <label className={style.label} htmlFor="email">Email: </label>
                <input className={style.input} placeholder='Insert username' type='text' onChange={handleChange}value={userData.email} name="email"/>
                {errors.e1 ? (<p>{errors.e1}</p>)
                : errors.e2 ? (<p>{errors.e2}</p>) 
                :(<p>{errors.e3}</p> )} 
                <br/>
                <label className={style.label} htmlFor="password">Password: </label>
                <input className={style.input} placeholder='Insert password' type='password' onChange={handleChange} value={userData.password} name="password"/>
                {errors.p1 ? <p>{errors.p1}</p>
                : <p>{errors.p2}</p> }
                <hr/>
                <button className={style.boton} onClick={handleSubmit}> Submit </button>
            </form>
        </div>
    )
}

export default Form;