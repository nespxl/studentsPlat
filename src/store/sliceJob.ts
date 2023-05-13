import {createSlice} from '@reduxjs/toolkit'

interface IJob {
    news: Array<object>
    isLoading: boolean
    error: string
}

const initialState: IJob = {
    news: [],
    isLoading: false,
    error: '',
}

export const sliceJob = createSlice({
    name: 'sliceJob',
    initialState,
    reducers: {
        todoFetch(state) {
			state.isLoading = true
		},
		todoFetchSuccess(state, actions) {
			state.isLoading = false
			state.error = ''
			state.news = actions.payload
		},
        todoFetchError(state) {
			state.isLoading = false
			state.error = 'Error'
			state.news = []
		},
    }
})

export default sliceJob.reducer
