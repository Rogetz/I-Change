import { Participate } from "../components/participate"

// make this a parameter based component so that it stores different participants of a particular project.
// technically right but not useful for my current application.

export default function ParticipatePage(){
    return(
        <Participate/>
    )
}


/*export default function ParticipatePage(req,res){
    const activityTitle = ``;

    if(req.method === "POST"){
        activityTitle = req.body
        console.log("post method reached")
    }
    else{
        res.setHeader("allow",['POST'])
        res.status(405).end(`method not allowed`)
    }
    return(
        <Participate activityTitle={activityTitle}/>
    )
}*/


