import {createSlice} from "@reduxjs/toolkit";

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "bills",
    initialState: [{}],
    reducers: {
        billsInitialized: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                state[i + 1] = action.payload[i]
            }
        },
    }
})

export const {billsInitialized} = slice.actions
export default slice.reducer
