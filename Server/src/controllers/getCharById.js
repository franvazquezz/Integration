const URL = 'https://rickandmortyapi.com/api/character'
const axios = require('Axios')

const getCharById = async (req, res) => { // controlador se encarga de la logica de la ruta //
    try {
        const {id}= req.params;
        const {data} = await axios.get(`${URL}/${id}`);
        let character = { 
            id: data.id, 
            name: data.name, 
            gender: data.gender, 
            species: data.species, 
            origin: data.origin, 
            image: data.image, 
            status: data.status 
        };
        return character.name ? res.json(character) : res.status(404).send('Not found')
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {getCharById}