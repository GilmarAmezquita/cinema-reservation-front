import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import authSlice from "./reducers/authSlice";
import { APP_SECRET_KEY } from "../config/const";

const encryptor = encryptTransform({
    secretKey: APP_SECRET_KEY || "secret-key",
})

const persistConfig = {
    timeout: 100,
    key: "root",
    storage,
    transforms: [encryptor],
    expireIn: 24*60*60, 
    whitelist: ["authState"]
}

const rootReducer:Reducer = combineReducers({
    auth: authSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);