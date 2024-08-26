
// action creators to enable reusability.
function likeIncrement(){
    return({
        type: LIKE_INCREMENT,
    })
}

function commentIncrement(){
    return({
        type: COMMENT_INCREMENT,
    })
}

export {likeIncrement,commentIncrement}