import {combineReducers, configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/auth";
import userReducer from "./slices/currentUser";
import datePickerReducer from "./slices/datePicker";
import messagesReducer from "./slices/messages";
import tjUsersReducer from "./slices/tjUsers";
import billsReducer from "./slices/bills";

import storage from 'redux-persist/lib/storage'
import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import logger from "./middleware/logger";

const reducers = combineReducers({
    authReducer,
    userReducer,
    datePickerReducer,
    messagesReducer,
    tjUsersReducer,
    billsReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
});

export default store
