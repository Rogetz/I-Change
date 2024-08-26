import fs from "fs"
import path from "path"
import matter from "gray-matter"
//for the single post
import { remark } from "remark"
import html from "remark-html"

 
const postsDirectory = path.join(process.cwd(),"blogposts")


// this simply rreturns the minor details of the post and not the actual post
export function getSortedPostsData(postPath){
    // read the directory first
    const postsDirectory2 = path.join(postsDirectory,postPath)
    const fileNames = fs.readdirSync(postsDirectory2)

    const allPostsData = fileNames.map(function(filename,index){
        // remove the md extension from the file to get the filename or id
        const id = filename.replace(/\.md$/,'')

        //full path for each file
        const fullPath  = path.join(postsDirectory2,filename)
        // read the markdown file as string
        const fileContents = fs.readFileSync(fullPath,'utf-8')

        // use gray-matter to parse the metadata section.
        const  matterResult = matter(fileContents)

        const blogPost = {
            id,
            ...matterResult.data
        }

        return blogPost
    })
    // return the sorted posts
    return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1)

}

// This is for getting the full data of a single full post
export async function getPostData(postPath){
    const fullPath = path.join(postsDirectory,postPath)
    const fileContents = fs.readFileSync(fullPath,'utf8')
    
    const matterResult = matter(fileContents)
    
    // I added this trick for generating a filename here
    const arr = postPath.split("/")
    const filename = arr[arr.length-1]
    const id = filename.replace(/\.md$/,'')

    const processedContent = await remark().use(html).process(matterResult.content)

    // the initial one that I've moved temporarily
    //const contentHtml = processedContent.toString()
    const contentHtml = processedContent.toString()

    const blogPostWithHtml = {
        id,
        contentHtml,
        ...matterResult.data
    }

    return blogPostWithHtml
}

// for getting all post full data
export async function getAllPostsData(postPath){
    const postsDirectory2 = path.join(postsDirectory,postPath)
    const fileNames = fs.readdirSync(postsDirectory2)

    const allPostsData = fileNames.map(async function (filename,index){
        // remove the md extension from the file to get the filename or id
        const id = filename.replace(/\.md$/,'')

        //full path for each file
        const fullPath  = path.join(postsDirectory2,filename)
        // read the markdown file as string
        const fileContents = fs.readFileSync(fullPath,'utf-8')

        // use gray-matter to parse the metadata section.
        const matterResult = matter(fileContents)

        const processedContent = await remark().use(html).process(matterResult.content)

        // the initial one that I've moved temporarily
        //const contentHtml = processedContent.toString()
        const contentHtml = processedContent.toString()    

        const blogPost = {
            id,
            contentHtml,
            ...matterResult.data
        }
        console.log(`blog post: ${JSON.stringify(blogPost)}`)
        return blogPost
    })
    // here I used await for a single object I guess in some cases you have to await each object
    //console.log(`all posts data: ${(await allPostsData[0]).title}`)
    // return the sorted posts
    return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1)
}

//for getting a particular programs full different data
//note that the path should be exclusive of the actual file name.
// this simply accepts th directory name to find its contents relative to the overall blogPosts directory that contains all the other posts.
export async function getAllProgramsData(postPath){
    const fullPath = path.join(postsDirectory,postPath)
    const fileNames = fs.readdirSync(fullPath)

    const allPostsData = fileNames.map(async function (filename,index){
        // remove the md extension from the file to get the filename or id
        const id = filename.replace(/\.md$/,'')

        //full path for each file
        const fullPath  = path.join(postsDirectory,filename)
        // read the markdown file as string
        const fileContents = fs.readFileSync(fullPath,'utf-8')

        // use gray-matter to parse the metadata section.
        const matterResult = matter(fileContents)

        const processedContent = await remark().use(html).process(matterResult.content)

        // the initial one that I've moved temporarily
        //const contentHtml = processedContent.toString()
        const contentHtml = processedContent.toString()    

        const blogPost = {
            id,
            contentHtml,
            ...matterResult.data
        }
        return blogPost
    })
    // here I used await for a single object I guess in some cases you have to await each object
    //console.log(`all posts data: ${(await allPostsData[0]).title}`)
    // return the sorted posts
    return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1)
}