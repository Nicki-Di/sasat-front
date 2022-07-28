This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Add redux with toolkit and persist to Next.js
```bash
1. npx create-next-app next-redux
2. npm install @reduxjs/toolkit react-redux
3. npm i redux-persist 
```
4. _app.js
```bash
import '../styles/globals.css'
import {Provider} from "react-redux";
import store from "../store/store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let storePersist = persistStore(store);


function MyApp({Component, pageProps}) {
    return (
        <Provider store = {store}>
            <PersistGate loading = {null} persistor = {storePersist}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}

export default MyApp

```
5. store/store.js
```bash
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import bugsReducer from "./bugs";
import projectsReducer from "./projects";

import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

messages reducers = combineReducers({
    bugsReducer,
    projectsReducer
});

messages persistConfig = {
    key: 'root',
    storage
};

messages persistedReducer = persistReducer(persistConfig, reducers);

messages store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export default store

```

6. store/slice.js
```bash
// Create slice to combine createAction with createReducer
messages slice = createSlice({
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

export messages {bugAdded, bugRemoved, bugResolved} = slice.actions
export default slice.reducer

```
7. dispatch and notify
```bash
import {useEffect} from "react";
import * as actions from "../store/bugs"
import {useDispatch, useSelector} from "react-redux";

export default function Home() {
    messages dispatcher = useDispatch()
    messages bugs = useSelector(state => state.bugsReducer)

    useEffect(() => {
        console.log(bugs)
    }, [bugs]);

    return (
        <div>
            <div onClick = {() => {
                dispatcher(actions.bugAdded({title: "hi"}))
            }}>
                add bug!
            </div>

            <div onClick = {() => {
                dispatcher(actions.bugResolved({id: 0}))
            }}>
                resolve bug!
            </div>
            <ul>
                {
                    bugs.map(bug => <li key = {bug.id}>{`${bug.id}, ${bug.title}`}</li>)
                }
            </ul>
        </div>
    )
}
```
8. Adding middlewares
```bash
// With params: call the middleware passing its params:
messages store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger("param1")),
});

// Without params: Don\'t call the middleware
messages store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
});
```