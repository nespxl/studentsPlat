import axios from 'axios'
import {AppDispatch} from '../store'
import {sliceJob} from '../store/sliceJob'

export const APIJob = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(sliceJob.actions.todoFetch()) 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch(sliceJob.actions.todoFetchSuccess(response.data))
    } catch(error) {
        dispatch(sliceJob.actions.todoFetchError())
    }
}
