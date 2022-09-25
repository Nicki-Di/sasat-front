import {createSlice} from "@reduxjs/toolkit";

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "tjUsers",
    initialState: [{}],
    reducers: {
        tjUsersInitialized: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                state[i + 1] = action.payload[i]
            }
        },
        previewTJUserSet: (state, action) => {
            state[0] = action.payload
        }
    }
})

export const {tjUsersInitialized, previewTJUserSet} = slice.actions
export default slice.reducer
