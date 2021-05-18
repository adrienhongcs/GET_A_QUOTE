import axios from 'axios'
import { GET_RANDOM_QUOTE, GET_ALL_QUOTES, ADD_QUOTE, DELETE_QUOTE, QUOTES_LOADING } from './types'

export const getAllQuotes = () => dispatch => {
    dispatch(setQuotesLoading())
    axios
        .get('/api/quotes/all')
        .then(res => 
            dispatch({
                type: GET_ALL_QUOTES,
                payload: res.data
            })
        )
}

export const getRandomQuote = () => dispatch => {
    dispatch(setQuotesLoading())
    axios 
        .get('/api/quotes')
        .then(res => 
            dispatch({
                type: GET_RANDOM_QUOTE,
                payload: res.data
            })
        )
}

export const addQuote = (quote) => dispatch => {
    axios
        .post('/api/quotes', quote)
        .then(res =>
            dispatch({
                type: ADD_QUOTE,
                payload: res.data
            })
        )
}

export const deleteQuote = (id) => dispatch => {
    axios
        .delete(`/api/quotes/all/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_QUOTE,
                payload: id
            })
        )
}

export const setQuotesLoading = () => {
    return {
        type: QUOTES_LOADING
    }
}