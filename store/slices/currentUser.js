import {createSlice} from "@reduxjs/toolkit";


// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "user",
    // TJ
    // initialState: {
    //     name: "رضا محمدی",
    //     role: "تجمیع کننده",
    //     area: "منطقه 1 - شهر تهران",
    //     username: "TavanirAdmin",
    //     email: "Tajmi123@gmail.com",
    //     password: "a@324532",
    // },

    // TZ
    // initialState: {
    //     name: "رضا محمدی",
    //     role: "توزیع کننده",
    //     area: "منطقه شهر تهران",
    //     username: "TavanirAdmin",
    //     email: "Tajmi123@gmail.com",
    //     password: "a@324532",
    // },

    // TV
    initialState: {
        name: "رضا محمدی",
        role: "توانیر",
        area: "شرکت توانیر",
        username: "TavanirAdmin",
        email: "Tajmi123@gmail.com",
        password: "a@324532",
    },

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
