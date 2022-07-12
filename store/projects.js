import {createAction, createReducer, createSlice} from "@reduxjs/toolkit";

let lastId = 0

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        projectAdded: (state, action) => {
            state.push({
                id: ++lastId,
                title: action.payload.title,
                resolved: false
            })
        },
        projectRemoved: (state, action) => {
            state.splice(action.payload.id, 1)
        },

    }
})

export const {projectAdded, projectRemoved} = slice.actions
export default slice.reducer

