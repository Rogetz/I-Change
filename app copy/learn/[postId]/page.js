"use server";

import { Post } from "../../components/post";
import { Learn } from "../../components/learnMore";

export default async function LearnPage({params}){
    const {postId} = params

    return(
        <>
        <Learn postId={postId}/>
        </>
    )
}