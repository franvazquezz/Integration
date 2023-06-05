const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case 'FILTER':
            const allCharactersFiltered = state.allCharacters.filter((char)=> char.gender === action.payload)
            return {...state, myFavorites: allCharactersFiltered}
        case 'ORDER':
            const allCharactersFavCopy = [...state.allCharacters]
            return { ...state, myFavorites: action.payload === "A" ? allCharactersFavCopy.sort((a, b) => a.id - b.id) :  allCharactersFavCopy.sort((a, b) => b.id - a.id)}
        case 'SHOW_ALL':
            return {...state, myFavorites: state.allCharacters}
        default:
            return  {...state}
    }
}
 export default reducer