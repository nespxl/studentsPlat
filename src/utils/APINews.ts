import axios from 'axios'
import {AppDispatch} from '../store'
import {sliceNews} from '../store/sliceNews'

export const APINews = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(sliceNews.actions.todoFetch()) 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch(sliceNews.actions.todoFetchSuccess(response.data))
    } catch(error) {
        dispatch(sliceNews.actions.todoFetchError())
    }
}
