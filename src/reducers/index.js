const initialState = {
    books: []
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default:
                return state; 
    }
    
}

export default reducer;