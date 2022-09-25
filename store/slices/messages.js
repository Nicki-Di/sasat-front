import {createSlice} from "@reduxjs/toolkit";

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "messages",
    initialState: [{}],
    reducers: {
        messagesInitialized: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                state[i + 1] = action.payload[i]
            }
        },
        previewMessageSet: (state, action) => {
            state[0] = action.payload
        }
    }
})

export const {messagesInitialized, previewMessageSet} = slice.actions
export default slice.reducer
