const express = require ('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index')
const morgan = require('morgan')

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
server.use(express.json());
server.use(morgan('dev'));


server.use('/rickandmorty', router)

server.listen(PORT, () => {console.log(`Server listening to juice wrld on port: ${PORT}`);});










// http.createServer((req, res)=>{
//     res.setHeader('Acess-Control-Allow-Origin', '*');
    
//     if(req.url.includes('/rickandmorty/character')){
//         const id = (req.url.split('/').at(-1))
//         getCharById(res, Number(id))
//     }
// }).listen(3001, 'localhost')