import {createSlice} from '@reduxjs/toolkit'

interface INews {
    news: Array<object>
    isLoading: boolean
    error: string
}

const initialState: INews = {
    news: [],
    isLoading: false,
    error: '',
}

export const sliceNews = createSlice({
    name: 'sliceNews',
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

export default sliceNews.reducer
