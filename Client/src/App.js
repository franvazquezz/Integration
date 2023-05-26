import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation()
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) setCharacters((oldChars) => [...oldChars, data]);
         else alert('No existe un personaje con ese ID');
      } catch (error) {
         console.log(error);
      }
   }
   const onClose = (id) => {
      setCharacters(characters.filter((char)=> {
         return char.id !== Number(id)
      })
      )
   }

   return (
      <div className='App'>
                  {pathname !== '/' && <Nav onSearch={onSearch}/>}
               <Routes>
                  <Route path='/' element = {<Form login= {login}/>}/>
                  <Route path="/home" element = {<Cards characters={characters} onClose={onClose}/>}/>
                  <Route path="/about" element = {<About/>}/>
                  <Route path="/detail/:id" element = {<Detail/>}/>
                  <Route path='/favorites' element = {<Favorites/>}/>
               </Routes>
      </div>
   );
}


export default App;
