'use client';
import { usePathname } from "next/navigation"
import Link from "next/link"
import {useRef,useEffect,useState} from "react"
import {FaList,FaBars, FaMoon, FaShoppingCart, FaSun, FaUserCircle, FaRegWindowClose,FaWindowClose, FaCaretDown, FaCaretUp} from "react-icons/fa"
import Logo from "./assets/logo.jpg"
import clsx from "clsx"
import Image from "next/image"
import {useTheme} from "next-themes"
// import next-themes now and start using it


export function NavComponents(){
    // for setting and telling which theme is present
    const [darkState,setDarkState] = useState(<FaMoon className="dark:text-green-950 text-black text-2xl"/>)
    const [menuState,setMenuState] = useState(<div className="hidden"></div>)
    const {setTheme,resolvedTheme} = useTheme()
    // detects the current path that they are in.
    const pathName = usePathname()
    //for displaying the light toggle button depending on the resolved theme.

    useEffect(function(){
        if(resolvedTheme === "dark"){
            setDarkState(<FaSun className="dark:text-green-50 text-green-500 text-2xl"/>)
        }
        else{
            setDarkState(<FaMoon className="dark:text-green-950 text-black text-2xl"/>)   
        }
    },[])

    let darkHandler = function(e){
        e.preventDefault()
        if(resolvedTheme === "dark"){
            setDarkState(<FaMoon className="animate-[spin_0.3s_linear_1] dark:text-green-950 text-black text-2xl"/>)   
            return setTheme("light")
        }
        else{
            setDarkState(<FaSun className="animate-[spin_0.3s_linear_1]  dark:text-green-50 text-green-500 text-2xl"/>)
            return setTheme("dark") 
        }
    }

    const links = [
    {name: "Home",href:"/"},
    {name: "About-us",href:"/about",innerList:[
        {name: "mission and vision",href :"/about#mission"},
        {name: "our story",href: "/about#story"},
        {name: "Team",href: "/about#team"}
    ]},
    {name: "Programs",href:"/programs",innerList:[
        {name: "mentorship",href:"/programs#mentorship"},
        {name: "education",href:"/programs#education"},
        {name: "scholarships",href:"/programs#scholarships"}
    ]},
    {name: "Get-Involved",href:"/getinvolved",innerList:[
        {name: "volunteer",href:"/getinvolved#volunteer"},
        {name: "donate",href:"/getinvolved#donate"},
        {name: "partner with us",href:"/getinvolved#partner"}
    ]},
    {name: "Events",href:"/events",innerList:[
        {name: "upcoming",href:"/events#upcoming"},
        {name: "past",href:"/events#past"}        
    ]},
    {name: "Contact-us",href:"/contactus",innerList:[
        {name: "contact info",href:"/contactus#contact"},
        {name: "location",href:"/contactus#location"},
        {name: "social links",href:"/contactus#social"}
    ]}]

    let listToggler = function(e){
        e.preventDefault()
        setMenuState(<HamburgerMenu itemsList={links} setMenuState={setMenuState}/>)
    }

    // The link we're using is from next hence I can't access the native link element through react's href-

    return (
        <>
            <div className=" bg-white select-none dark:bg-black dark:text-slate-600 w-full md:w-auto z-20  drop-shadow-sm mx-0 md:mx-4 mt-0 md:mt-3 sticky top-0 md:top-2 shadow-black shadow-sm rounded-none md:rounded-3xl mb-5 px-6 h-12 md:h-16 bg-white-700 box-border flex items-center justify-between">
                <div className="w-fit h-fit flex items-center gap-2 md:gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden">
                    <Image src={Logo} className="w-full h-full rounded-full object-cover object-center" width={200} height={200}/>
                </div>
                <p className="text-xl md:text-xl text-green-500 h-4 font-bold text-center flex items-center">
                    <span className="flex items-center">i</span>
                    <span className="dark:text-white text-black flex items-center" >-</span>
                    <span className="text-green-950 dark:text-white flex items-center">Change</span>
                </p>
                </div>
                <button onClick={darkHandler}>
                    {darkState}
                </button>
                <NormalMenu links={links}/>
                <Link href="/login" className="w-12 h-full flex flex-col justify-center items-center text-xl text-center">
                    <button className="w-12 h-full flex flex-col justify-center items-center text-xl text-center">
                        <FaUserCircle className="text-xl text-green-700"/>
                        <span className="hidden text-center sm:block text-sm lg:text-xl">LogIn</span>
                    </button>                
                </Link>
                <button onClick={listToggler} className="block lg:hidden">
                    <FaBars className="text-2xl"/>
                </button>
            </div>
            <div>
                {menuState}
            </div>
        </>
    )
}

export function NormalMenu({links}){
    //must be in the same directory with the SingleLink component.
    const pathName = usePathname()


    return(
        <div className="hidden w-8/12 h-full lg:flex items-center justify-evenly">
            {links.map(function(link,index){
                if(link.innerList == undefined){
                    return (<Link key={index} className={clsx("text-center  md:flex items-center hover:text-green-600 text-xl px-3 py-2 rounded-3xl hover:bg-white-950 border-blue-750",{"text-green-500 dark:text-white border-b-2 border-black dark:border-green-900": link.href == pathName,"text-green-950 dark:text-slate-600": link.href != pathName})}  key={link.href} name={link.name} href={link.href}>{link.name}</Link>)        
                }
                else{
                    return <SingleLink key={index} link={link} />           
                }
            })}
        </div>
    )
}

function SingleLink({link}){
    const [innerVisibility,setInnerVisibility] = useState("hidden")
    const pathName = usePathname()


    let innerListHandler = function(e){
        e.preventDefault()
        setInnerVisibility("visible")
    }
    let listRemover = function(e){
        e.preventDefault()
        setInnerVisibility("hidden")     
    }
    return(
        <>
        <div className="relative select-none flex gap-2 items-center">
            <Link  className={clsx("text-center  md:flex gap-1 items-center hover:text-green-600 text-xl px-3 py-2 rounded-3xl hover:bg-white-950 border-blue-750",{"text-green-500 dark:text-white border-b-2 border-black dark:border-green-900": link.href == pathName,"text-green-950 dark:text-slate-600": link.href != pathName})}  key={link.href} name={link.name} href={link.href}>{link.name}</Link>
            <FaCaretDown onClick={innerListHandler} className={clsx("dark:text-white text-green-600",{"block": innerVisibility == "hidden","hidden": innerVisibility == "visible"})}/>
            <FaCaretUp onClick={listRemover} className={clsx("dark:text-white text-green-600",{"block": innerVisibility == "visible","hidden": innerVisibility == "hidden"})}/>
            <div className={clsx("absolute rounded-xl px-2 py-3 flex-col items-start h-auto w-full dark:bg-white bg-black  top-12 left-0 gap-4",{"flex":innerVisibility == "visible","hidden": innerVisibility == "hidden"})}>
            {link.innerList.map(function(link,index){
                return(
                    <Link key={index} href={link.href} name={link.name} className="text-green-600 box-border max-w-full rounded-xl dark:bg-black bg-white px-3 py-2 dark:text-green-600">
                        {link.name}
                    </Link>
                )
            })}
            </div>  
        </div>
        </>                      
    )
}

export function HamburgerMenu({itemsList,setMenuState}){
    const pathName = usePathname()
    // each item in the item list must have a name and a link property
    // for each nested item just add a nestedList array property to the current item
    let cancelHandler = function(e){
        e.preventDefault()
        setMenuState("")
    }
    return(
        <div className="fixed drop-shadow-xl right-0 top-0 z-30 px-3 flex flex-col items-end  overflow-auto h-full w-3/4 sm:w-1/3 bg-white dark:bg-black shadow-lg shadow-green-700  dark:text-white text-green-950">
            <div className="w-full flex justify-between h-12 px-3 pt-3  mb-4">
                <div className="text-xl md:text-xl text-green-500 h-4 font-bold text-center flex items-center">
                    <span className="flex items-center">i</span>
                    <span className="text-white flex items-center" >-</span>
                    <span className="text-green-950 flex items-center">Change</span>
                </div>
                <FaRegWindowClose className="text-2xl text-green-500 " onClick={cancelHandler}/>
            </div>
            <p className="w-full text-slate-600 text-left font-medium mb-2">menu</p>
            <div className= "h-4/5 w-full overflow-auto flex flex-col gap-4">
            {itemsList != undefined && itemsList != null ? 
                itemsList.map(function(item){
                    return  <div className="w-full h-auto flex flex-col gap-2 items-end" >
                        <Link key={item.href} name={item.name} href={item.href} className={clsx("font-medium w-full h-auto py-2 pl-3 rounded-xl",{"text-white dark:text-green-700  bg-green-500  dark:bg-gray-300 ": item.href == pathName,"text-white dark:text-green-950 dark:bg-gray-400 bg-green-950 ": item.href != pathName})}>
                            {item.name}                        
                        </Link>
                        {/*check the inner list property*/}
                        {item.innerList != undefined ?
                        item.innerList.map(function(nestedItem){
                            return <div className="w-full h-auto pl-4 mt-2 ml-6">
                                <Link key={nestedItem.href} name={nestedItem.name} href={nestedItem.href} className={clsx("font-medium w-full h-auto py-2 px-3 rounded-xl",{"text-white dark:text-white dark:bg-white-500  ": item.href == pathName,"text-white dark:text-slate-500 bg-green-950 dark:bg-green-950": item.href != pathName})} >
                                {nestedItem.name}                        
                                </Link>          
                            </div>
                        })
                        :
                        <div className="hidden"></div>
                    }
                    </div>
            })
            :
            <div className="hidden"></div>
            }
            </div>
        </div>
    )
}


