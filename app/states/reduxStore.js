import {configureStore}  from "@reduxjs/toolkit"
import {receiptInfoReducer,authDataReducer} from "./newReducer"

// this is another object style they'll be exported as part of an object still{}.
export const store = configureStore({
    // check the right way of assigning a reducer whether its an array or an object.
    // found out it should be an object, instead of an array.
    reducer: {
        receiptInfo : receiptInfoReducer,
        authData: authDataReducer
    }
})
