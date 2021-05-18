import { GET_RANDOM_QUOTE, GET_ALL_QUOTES, ADD_QUOTE, DELETE_QUOTE, QUOTES_LOADING } from '../actions/types'

const initialState = {
    quotes: [],
    randomQuote: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RANDOM_QUOTE:
            return {
                ...state,
                randomQuote: action.payload,
                loading: false
            }
        case GET_ALL_QUOTES:
            return {
                ...state,
                quotes: action.payload,
                loading: false
            }
        case ADD_QUOTE:
            return {
                ...state,
                quotes: [action.payload,...state.quotes]
            }
        case DELETE_QUOTE:
            return {
                ...state,
                quotes: state.quotes.filter(quote => quote._id !== action.payload)
            }
        case QUOTES_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}