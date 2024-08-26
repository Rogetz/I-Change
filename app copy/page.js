// this image is different from the react Image element, it's one from react.
import {Suspense} from "react"
import { ActualHome,ActualHomeSkeleton } from "./components/home"

// find out how to use suspense correctly.

// funny part is that for every route you must create a new folder for it e.g about.
// good thing it allows grouping through nesting of folders e.d Admin/About
// also something that am noting that page.js is a special file.
// The default component exported is the one representing a particular page but its name is not exposed
// only the data inside the page.js file is made publicly accessible.
// so once you've immported the globals.css in the layout file you don't need to reimport it.

// funny part is that for every route you must create a new folder for it e.g about.
// good thing it allows grouping through nesting of folders e.d Admin/About
// also something that am noting that page.js is a special file.
// The default component exported is the one representing a particular page but its name is not exposed
// only the data inside the page.js file is made publicly accessible.
export default function HomePage(){
    return(
        <div className="w-full min-h-screen overflow-x-hidden">
            {/*
            This is the home page
            /*This is a nextks image for optimization
            <Image src={mongoScreenShot} className="hidden md:block w-750 h-500" alt="no image found"/>            
            */}
            <div className="mx-0 max-w max-h">
                <Suspense fallback={<ActualHomeSkeleton/>}>
                    <ActualHome/>
                </Suspense>
            </div>
        </div>
    )
}




