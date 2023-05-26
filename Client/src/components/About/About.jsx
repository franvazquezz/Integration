import  pancho from './pancho.jpg'
import style from './About.module.css';

const About = () => {
    return (
        <div className={style.fondo}>
            <img className={style.img}src='https://ph-files.imgix.net/fa055e7c-5472-4153-b9c0-6b3d889a613d.gif?auto=format' alt=''/>
            <h1 className={style.pancho} >About</h1>
            <img className={style.foto} src={pancho} alt=''></img>
            <h2 className={style.text}>
                <p>Creado por</p>
                <p>Francisco Vazquez</p> 
                <p>estudiante de Henry
                cohorte 38a</p> 
            </h2>
        </div>
    )
}

export default About