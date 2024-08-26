"use client";

import {useState,useEffect,useRef} from "react"

// this is a client component meant to store the data as state for display

export function ContentComponent({contentHtml}){
    //const [contentHtml,setContentHtml] = useState(contentHtml)
    const sectionRef = useRef()
    
    useEffect(function(){
        sectionRef.current.innerHTML = contentHtml
    },[])


    return(
        <>
            {/*<section ref={sectionRef} dangerouslySetInnerHTML={{__html: contentHtml}}>

            </section>*/} 
        <section ref={sectionRef}>

        </section>

        </>
    )
}