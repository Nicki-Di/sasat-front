import {createSlice} from "@reduxjs/toolkit";

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "messages",
    initialState: [{}],
    reducers: {
        messagesInitialized: (state, action) => {
            action.payload.forEach(message => state.push(message))
        },
        previewMessageSet: (state, action) =>{
            state[0] = action.payload
        }
    }
})

export const {messagesInitialized, previewMessageSet} = slice.actions
export default slice.reducer
