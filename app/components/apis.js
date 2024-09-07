

//fetch for data from a nextjs api like you would in a normal react/javascript frontend.
// However here I realised that I did not need a post request. A persistent local storage was just more than enough.

export async function dataRequesting(jsonData){
    await fetch("/participate",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })
}