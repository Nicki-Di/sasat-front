import {combineReducers, configureStore} from "@reduxjs/toolkit"
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import storage from 'redux-persist/lib/storage'
import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from 'redux-persist'
import logger from "./middleware/logger";

const reducers = combineReducers({
    bugsReducer,
    projectsReducer
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
        }).concat(logger("param1")),
});

export default store
