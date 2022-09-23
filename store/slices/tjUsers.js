import {createSlice} from "@reduxjs/toolkit";

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "tjUsers",
    initialState: [{}],
    reducers: {
        tjUsersInitialized: (state, action) => {
            action.payload.forEach(tjUser => state.push(tjUser))
        },
        previewTJUserSet: (state, action) =>{
            state[0] = action.payload
        }
    }
})

export const {tjUsersInitialized, previewTJUserSet} = slice.actions
export default slice.reducer
