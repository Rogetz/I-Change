
/*import {initialState} from "./initialState"

// remember that each reducer takes in the state as the first argument and the action as the second argument.
// manage adding, deleting and anything to do with likes.
function likeManager(state = initialState, action){
    if(action.type == "LIKE_INCREMENT"){
        // the ... operator makes a copy so whatever follows must have a key, present in the initial state and a value
        // the ... spread operator makes a copy which you can directly modify throught a key in this format below, remember that reduc works with immutability.
        return ({...state,user : {likes: state.user.likes + 1}})
    }
    return state
}

// managing the adding, deleting of comments, and everything to do with comments.
function commentManager(state = initialState, action){
    if(action.type == "COMMENT_INCREMENT"){
        return (
            {...state,user : {comments: state.user.comments + 1}}
        )
    }
    return state
}

export {likeManager,commentManager}
*/

