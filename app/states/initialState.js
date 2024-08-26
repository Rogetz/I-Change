// here I want to define two initial states, one to be used by the redux reducers,
// remember that one advantage reduc has over react reducers is that for it the initial states is immmutable.
// the other one which is a context to be used by the normal react reducers, for It I want to test if the context is mutable.

// new booking data
let mawegoHostels = {
    // data used for generating receipt
    // time will be calculated directly and keyed in to the receipt so need of putting it as a redux state since it will cause a lot of delays.
    bookingData : {
        roomsAvailable: 20,
        name: "",
        regNo: "",
        telNo: "",
        roomName: "",
        amountPaid: 0,
        roomPrice: 0,
        roomDuration: "",
        roomType: "",
        confirmationCode: "",
    },
    authData : {
        role: "",
        // this token is to be stored in the local storage.
        token: "",
        // sent it since I don't want any decoding in the frontend.
        userName: ""
    }
}

export {mawegoHostels}