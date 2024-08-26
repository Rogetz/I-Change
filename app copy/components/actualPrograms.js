"use server";
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram,FaTwitter,FaPen,FaClipboardCheck,FaAirbnb} from "react-icons/fa";
import studentPlanting from "../assets/studentPlanting.jpg"
import Ivy from "../assets/Ivy_cropped.png"
import plant from "../assets/plant.jpg"
import studentPlanting2 from "../assets/studentPlanting2.jpg"



//for the programs page
export function SingleProgram({program,programPath}){
    const [iconState,setIconState] = useState()
    const tag = program.tag
    const programName = program.name 
    const programDetail = program.detail
    
    useEffect(function(){
        if(tag == "internship"){
            setIconState(<FaPen className="rounded-full text-4xl text-blue-600"/>)
        }
        else if(tag == "training"){
            setIconState(<FaClipboardCheck className="rounded-full text-green-600 text-4xl"/>)
        }
        else if(tag == "scholarship"){
            setIconState(<FaAirbnb className="rounded-full text-4xl dark:text-white text-black"/>)
        }
    },[])
    return(
        <div className="w-full flex flex-col gap-2  justify-end relative bg-center bg-cover bg-[url('../assets/studentPlanting2.jpg')] items-center sm:w-[23rem] lg:w-[23rem]  flex-shrink-0 flex-grow- h-[25rem] dark:bg-gray-950 bg-black rounded-xl px-4 py-8">
        <div className="dark:bg-black bg-white flex items-center justify-center rounded-full absolute top-4 left-4 w-[3.5rem] h-[3.5rem] lg:w-[4rem] lg:h-[4rem]">
            {iconState}
        </div>
        <div className="text-green-600 font-bold text-xl">
            {programName}
        </div>
        <div className="line-clamp-2 text-white">{programDetail}...</div>
        <div className="w-full h-12 flex justify-between">
            <Link className="text-green-600 dark:bg-white bg-white w-fit h-fit py-2 px-4 text-xl rounded-lg" href={`learn/${programPath}`}>
                apply
            </Link>
            <Link className="text-white dark:bg-black bg-green-600 w-fit h-fit py-2 px-4 text-xl rounded-lg" href={`learn/${programPath}`}>
                learn more...
            </Link>
        </div>
        </div>
    )
}
