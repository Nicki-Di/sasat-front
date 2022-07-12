import {createAction, createReducer, createSlice} from "@reduxjs/toolkit";


// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        bugAdded: (state, action) => {
            state.push({
                id: state.length,
                title: action.payload.title,
                resolved: false
            })
        },
        bugRemoved: (state, action) => {
            state.splice(action.payload.id, 1)
        },
        bugResolved: (state, action) => {
            state[action.payload.id].resolved = true
        }
    }
})

export const {bugAdded, bugRemoved, bugResolved} = slice.actions
export default slice.reducer


// These are not needed!
// Action creators
// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");
//
// // Reducer
// let lastId = 0
//
// createReducer([], {
//     bugAdded: (state, action) => {
//         state.push({
//             id: ++lastId,
//             title: action.payload.title,
//             resolved: false
//         })
//     },
//     bugRemoved: (state, action) => {
//         state.splice(action.payload.id, 1)
//     },
//     bugResolved: (state, action) => {
//         state[action.payload.id] = true
//     }
// })
