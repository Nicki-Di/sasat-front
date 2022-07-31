import {createSlice} from "@reduxjs/toolkit";


// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "user",
    initialState: {name: "رضا محمدی", role: "تجمیع کننده", area: "منطقه 1 - شهر تهران"},
    reducers: {
        userSet: (state, action) => {
            state.name = action.payload.name
            state.role = action.payload.role
            state.area = action.payload.area
        },
    }
})

export const {userSet} = slice.actions
export default slice.reducer
