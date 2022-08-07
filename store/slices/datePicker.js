import {createSlice} from "@reduxjs/toolkit";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const today = new DateObject({ calendar: persian, locale: persian_fa })

// Create slice to combine createAction with createReducer
const slice = createSlice({
    name: "datePicker",
    initialState: {
        mainPageMinDate: {year: today.year, month: today.month.number, day: today.day},
        mainPageMaxDate: {year: today.year, month: today.month.number, day: today.day},
    },
    reducers: {
        setMainPageMinDate: (state, action) => {
            state.mainPageMinDate = action.payload
            state.mainPageMaxDate = action.payload

        },
        setMainPageMaxDate: (state, action) => {
            state.mainPageMaxDate = action.payload
        },

    }
})

export const {setMainPageMinDate, setMainPageMaxDate} = slice.actions
export default slice.reducer
