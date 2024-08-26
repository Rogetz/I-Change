"use server";

import Link from "next/link"
import { getAllPostsData} from  "../../lib/posts"
import Image from "next/image";
import tempImage1 from "../planting1.jpg"
import tempImage2 from "../studentPlanting.jpg"

export async function PostsSkeleton(){
    return(
        <div>the posts skeleton</div>
    )
}

export async function  Posts(){
    // returns all the metadata for all posts
    const posts = await getAllPostsData("blog")
    const ads = "nothing to show currently"
    return(
        <div className="flex flex-col items-center w-full h-auto">
            <h1 className="text-2xl dark:text-slate-600 text-slate-700 font-bold">Trending in Environment</h1>
            <div className="flex w-full h-auto justify-center md:gap-8 md:p-8">
            <ActualPosts posts={posts}/>
            <AdsComponent ads={ads}/>
            </div>
        </div>
    )
}

export async function ActualPosts({posts}){
    return(
        <div className="w-full lg:w-2/3 flex flex-col items-center h-auto">
            {posts.map(async function(postSingle,index){
            // I've had to await each single object.
            // new technique I've learnt
            const post = await postSingle
            return <SinglePostComponent post={post}/>
            })}
        </div>
    )
}

export async function SinglePostComponent({post}){
    return(
        <Link href={`posts/${post.id}`} key={post.id} className="w-[96%] mb-4 px-3 md:m-0 md:mb-4 pb-3 border-b-2 dark:border-b-green-500 border-b-green-800 h-auto flex flex-col">
            <div className="w-full h-12 flex items-center lg:gap-4 gap-2">
                <div className="w-12 h-12 rounded-full">
                    <Image src={tempImage1} alt="avatar" className="w-full dark:bg-slate-600 bg-green-300  h-full rounded-full object-cover object-center" width={12} height={12}/>
                </div>
                <div className="w-fit text-xl dark:text-slate-600 text-black">
                    {post.author}
                </div>
            </div>
            <p className="w-full text-2xl font-bold dark:text-white text-black">
                {post.title}
            </p>
            <div className="w-full h-64 rounded-lg overflow-hidden">
                    <Image src={tempImage2} alt="avatar" className="w-full dark:bg-slate-600 bg-green-300  h-full rounded-lg object-cover object-center" width={500} height={500}/>
            </div>
            <p className="w-full mt-3 line-clamp-2 dark:text-white text-black">
                <span dangerouslySetInnerHTML={{__html : post.contentHtml }}>
                </span>...                          
            </p>
        </Link>

    )
}

export async function AdsComponent({ads}){
    return(
        <div className="hidden md:w-1/6 md:flex flex-col h-auto">

        </div>
    )
}