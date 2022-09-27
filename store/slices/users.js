import {createSlice} from "@reduxjs/toolkit";

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "users",
    initialState: [{}],
    reducers: {
        usersInitialized: (state, action) => {
            for (let i = 0; i < action.payload.length; i++) {
                state[i + 1] = action.payload[i]
            }
        },
        previewUserSet: (state, action) => {
            state[0] = action.payload
        },
        editUserSet: (state, action) => {
            for(let key in action.payload.user){
                if(action.payload.user[key])
                    state[action.payload.id][key] = action.payload.user[key]
            }
        },
    }
})

export const {usersInitialized, previewUserSet, editUserSet} = slice.actions
export default slice.reducer
