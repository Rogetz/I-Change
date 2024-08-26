"use server";

import { ContentComponent } from "./contentHtml";
import tempImage1 from "../planting1.jpg"
import tempImage2 from "../studentPlanting.jpg"


import { getSortedPostsData,getPostData } from "../../lib/posts";
import { ReaderButton } from "./readerButton";
import Image from "next/image";
import { FaFacebook, FaInstagram,FaPlayCircle,FaTwitter } from "react-icons/fa";
import Link from "next/link";


export async function Post({postId}){
    const idPath = `blog/${postId}`
    const {readTime,title,date,author,authorDetail,contentHtml,socials} = await getPostData(idPath)
    
    const postDetails = {readTime,title,date,author,authorDetail,contentHtml,socials}

    return(
        <div className="flex flex-col">
            <div className="w-full relative p-4  flex justify-between h-auto">
                <AuthorSide author={author} authorDetail={authorDetail} socials={socials}/>
                <BlogSectionComponent postDetails={postDetails}/>
                <div className=" hidden lg:block lg:w-1/6 h-auto">

                </div>
            </div>
            {/*this dangerously set is part of react apparently works well with the remark package */}
            
            {/*<ContentComponent contentHtml={contentHtml}/>*/}                 
               
            {/*<section>
                {contentHtml}
            </section>*/}
        </div>
    )
}

export async function BlogSectionComponent({postDetails}){
    const {readTime,title,date,author,authorDetail,contentHtml,socials} = postDetails
    return(
        <div className="flex flex-col select-none w-full gap-2 md:w-2/3 lg:w-1/2 mb-12">
            <p className="flex justify-start font-bold dark:text-white text-black text-3xl">{title}</p>
            <AuthorInline author={author} socials={socials}/>
            <div className="flex flex-row justify-between font-bold text-slate-600">            
                <p>{readTime} min read</p>
                <p>{date}</p>
            </div>
            <ReaderButton contentHtml={contentHtml}/>
        </div>
    )
}


export async function AuthorInline({author,socials}){
    return(
        <div className="flex flex-col md:hidden  gap-1 items-start text-sm w-full h-auto">
            <div className="w-full h-14 flex items-center gap-4">
                <div className="h-12 w-12 mb-1  rounded-full bg-green-600">
                    <Image src={tempImage1} className="w-full h-full rounded-full object-cover object-center" width={500} height={500}/>
                </div>
                <h1 className="dark:text-green-600 font-bold text-green-200 text-xl">{author}</h1>
            </div>
            <p className="flex text-xl mb-3">
                <span className="flex gap-3 text-2xl text-green-600">
                    {socials.map(function(social,index){
                        if(social.facebook != null){
                            return <Link key={index} href={social.facebook}>
                                <FaFacebook/>
                            </Link>        
                        }
                        else if(social.instagram != null){
                            return <Link key={index} href={social.instagram}>
                                <FaInstagram/>
                            </Link>             
                        }
                        else if(social.twitter != null){
                            return <Link key={index} href={social.twitter}>
                                <FaTwitter/>
                            </Link>                                 
                        }
                    })}
                </span>
            </p>
        </div>
    )

}

function AuthorSide({author,socials,authorDetail}){
    return(
        <div className="hidden sticky top-20 md:flex rounded-lg flex-col items-center  gap-1  text-sm md:w-1/4 py-4 md:h-[32rem] bg-slate-700">
            <div className="h-32 w-32 mb-3  rounded-full bg-green-600">
                <Image src={tempImage1} className="w-full h-full rounded-full object-cover object-center" width={500} height={500}/>
            </div>
            <h1 className="dark:text-green-600 font-bold text-green-200 text-xl">{author}</h1>
            <p className="flex text-xl mb-3 bg-white rounded-lg px-3 py-2">
                <span className="flex gap-3 text-2xl text-green-600">
                    {socials.map(function(social,index){
                        if(social.facebook != null){
                            return <Link key={index} href={social.facebook}>
                                <FaFacebook/>
                            </Link>        
                        }
                        else if(social.instagram != null){
                            return <Link key={index} href={social.instagram}>
                                <FaInstagram/>
                            </Link>             
                        }
                        else if(social.twitter != null){
                            return <Link key={index} href={social.twitter}>
                                <FaTwitter/>
                            </Link>                                 
                        }
                    })}
                </span>
            </p>
            <h1 className="text-xl w-full text-left pl-4">Author Bio</h1>
            <div className="px-4 w-full h-auto overflow-hidden">
                <p className="px-4 py-4 line-clamp-6 overflow-hidden bg-black rounded-lg dark:text-white text-white">
                    {authorDetail}
                </p>
            </div>
        </div>
    )
}