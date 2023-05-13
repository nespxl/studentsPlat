import {createSlice} from '@reduxjs/toolkit'

interface IMessage {
    input: string
}

const initialState: IMessage = {
    input: ''
}

export const sliceChatInput = createSlice({
    name: 'sliceChatInput',
    initialState,
    reducers: {
		todoFetchSuccess(state, actions) {
			state.input = actions.payload
		}
    }
})

export default sliceChatInput.reducer
