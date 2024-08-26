import {createSlice} from "@reduxjs/toolkit"
import { initialState } from "./initialState"

import { mawegoHostels } from "./initialState"


export const receiptInfo = createSlice({
    name : "receiptInfo",
    initialState: mawegoHostels.bookingData,
    reducers : {
        receiptData : (state,action) => {
            // I'm trying to directly set the data in the state to that of the payload and see if it works
            state.name = action.payload.name
            state.amountPaid = action.payload.amountPaid
            state.roomName = action.payload.roomName
            state.regNo = action.payload.regNo
            state.roomPrice = action.payload.roomPrice
            state.roomType = action.payload.roomType
            state.telNo = action.payload.telNo
            state.roomDuration = action.payload.roomDuration
        },
        amountUpdate : (state,action) => {
            // for updating the amount paid when the user pays.
            state.amountPaid = action.payload
        },
        receiptUpdate : (state,action) => {
            state.confirmationCode = action.payload
        },
        roomNameUpdate : (state,action) => {
            state.roomName = action.payload
        }
    }
    
})

export const authData = createSlice({
    name: "authInfo",
    initialState: mawegoHostels.authData,
    reducers: {
        // should be set during login
        rolesUpdate: (state,action) => {
            state.role = action.payload
        },
        // for updating the tokens
        tokenUpdate: (state,action) => {
            state.token = action.payload.token
            state.userName = action.payload.userName
            state.role = action.payload.role
        }
    }

})

//for the bookingData
export const receiptInfoReducer = receiptInfo.reducer
export const {receiptData,amountUpdate,receiptUpdate} = receiptInfo.actions

//for the authdata
export const authDataReducer = authData.reducer
export const {rolesUpdate,tokenUpdate} = authData.actions