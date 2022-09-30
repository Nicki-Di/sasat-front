import {Provider} from "react-redux";
import store from "../store/store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import '../styles/globals.css'
import '../styles/other.css'

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
