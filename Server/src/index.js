const { conn } = require('./DB_connection')
const server = require('./app');
const PORT = 3001;


conn.sync({ force: true, alter:true})


server.listen(PORT, () => {console.log(`Server listening to juice wrld on port: ${PORT}`);});