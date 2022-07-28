import {createSlice} from "@reduxjs/toolkit";


// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "auth",
    initialState: {login: true, forget: false},
    reducers: {
        forgetSet: (state) => {
            state.login = false
            state.forget = true
        },
        loginSet: (state) => {
            state.login = true
            state.forget = false
        },
    }
})

export const {forgetSet, loginSet} = slice.actions
export default slice.reducer
