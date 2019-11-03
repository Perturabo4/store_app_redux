const initialState = {
    books: [
        {id: 1, title: 'Dark disciple', author: 'Den Abnet'},
        {id: 2, title: 'Horus heresy', author: 'Den Abnet'}
    ]
}

const reducer = (state = initialState, action) => {

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