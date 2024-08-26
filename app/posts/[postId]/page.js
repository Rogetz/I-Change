"use server";

import { Post } from "../../components/post";

export default async function PostsPage({params}){
    const {postId} = params

    return(
        <>
        <Post postId={postId}/>
        </>
    )
}