"use client";

import Image from "next/image"
import Link from "next/link"
import {useState,useRef,useEffect} from "react"
import Wangari from "../assets/1721508933469.jpg"
import {FaEnvelope, FaEye, FaFacebook, FaGithub, FaGoogle, FaKey, FaUser,FaRegEye,FaRegEyeSlash, FaQuestionCircle, FaKeybase, FaKeycdn, FaTiktok, FaClosedCaptioning, FaWindowClose, FaBars, FaFileSignature, FaCheckCircle, FaMailBulk, FaMailchimp, FaEnvelopeOpen, FaEnvelopeOpenText, FaGlobeAfrica, FaFootballBall, FaMobile} from "react-icons/fa"
import { login,signUp as signupApi} from "../apis/login"; 

export  function LoginSkeleton(){
    return(
        <div className="w-full min-h-screen mb-12 flex flex-col items-center ">
        <div className="w-5/6 h-auto rounded-lg md:min-h-[30rem] flex flex-col md:flex-row dark:bg-black bg-slate-600 overflow-hidden animate-pulse box-border ">
            <div className="w-full md:w-1/2 h-[30rem] flex flex-col justify-center  py-4 md:h-full dark:bg-black bg-slate-600">
            </div>
            <div className="hidden md:block w-1/2 h-full dark:bg-slate-500">
            </div>
        </div>
        </div>
    )
}


export function Login(){
    const [toggleText,setToggleText] = useState("signup")
    const [textDesc,setTextDesc] = useState("new environmentalist ? ")
    const [popupViewState,setPopupViewState] = useState()
    const [loginState,setLoginState] = useState(<ActualLogin setPopupViewState={setPopupViewState}/>)

    let changeToggler = function(e){
        e.preventDefault()
        
        if(toggleText == "signup"){
            setLoginState(<SignUp setPopupViewState={setPopupViewState}/>)
            setToggleText("login")
            setTextDesc("member ? ")
        }
        else{
            setLoginState(<ActualLogin setPopupViewState={setPopupViewState}/>)
            setToggleText("signup")
            setTextDesc("new environmentalist ? ")
        }
    }
    return(
        <div className="relative w-full min-h-screen mb-12 flex flex-col items-center ">
        {popupViewState}
        <h1 className="dark:text-white flex flex-col md:flex-row text-black text-center md:text-left text-2xl sm:text-3xl mb-8 dark:font-normal font-bold"><span className="ml-0 md:ml-8 lg:ml-12 dark:text-green-500 text-2xl sm:text-3xl font-bold text-green-500">Join us</span></h1>
        <div className="w-5/6 h-auto rounded-lg md:min-h-[30rem] flex flex-col md:flex-row dark:bg-black bg-slate-600 overflow-hidden box-border ">
            <div className="w-full md:w-1/2 h-[30rem] flex flex-col justify-center  py-4 md:h-full dark:bg-black bg-slate-600">
                {loginState}
                <p className="dark:text-white text-white text-center ">{textDesc}<button onClick={changeToggler} className="dark:text-green-600 text-xl text-green-600">{toggleText}</button></p>            
            </div>
            <div className="hidden md:block w-1/2 h-full bg-transparent">
                <Image src={Wangari} className="w-full h-full object-cover object-center" width={600} height={600}/>
            </div>
        </div>
        </div>
    )
}

export function SignUp({setPopupViewState}){
    const [eyeState,setEyeState] = useState(true)
    const [visibilityState,setVisibilityState] = useState("hidden")
    const [displayState,setDisplayState] = useState("none")
    const [visibilityState2,setVisibilityState2] = useState("hidden")
    const [displayState2,setDisplayState2] = useState("none")
    const [emailRightState,setEmailRightState] = useState(false)
    // There are four options returned for the login,signup,confirm(for signup),changePassword(for loggin in)


    //The label refs
    const emailLabelRef = useRef(null)
    const emailRef = useRef(null)
    const skillLabelRef = useRef(null)
    const skillRef = useRef(null)
    const regionLabelRef = useRef(null)
    const regionRef = useRef(null)
    const userNameRef = useRef(null)
    const userNameLabelRef = useRef(null)
    const passwordLabel = useRef(null)
    const passwordRef = useRef(null)
    const errorRef = useRef(null)
    const lockRef = useRef(null)
    const phoneLabelRef = useRef(null)
    const phoneRef = useRef(null)
    


    let userNameHandler = function(e){
        let result = e.target.value
        if(result != ""){
            userNameLabelRef.current.innerHTML = "Full Name"
            userNameLabelRef.current.classList.remove("label-invalid")
            userNameLabelRef.current.classList.add("label-valid")
        }
        else if(result == ""){
            userNameLabelRef.current.classList.remove("label-valid")
            userNameLabelRef.current.classList.add("label-invalid")
            userNameLabelRef.current.innerHTML = "Input a value for the fullname please";
        }
        else{
            userNameLabelRef.current.classList.remove("label-valid")
            userNameLabelRef.current.classList.add("label-invalid")
            userNameLabelRef.current.innerHTML = "Input a valid value please";
        }
    }
    let passwordHandler = function(e){
        let error = []   
        if((/[a-z]/).test(e.target.value) == false){
            error.push("key in a lower case letter")
        }
        if((/[A-Z]/).test(e.target.value) == false){
            error.push("key in an uppercase letter")
        }
        if((/\d/).test(e.target.value) == false){
            error.push("key in a digit please")
        }
        if((/\s/).test(e.target.value) == true){
            error.push("remove any whitespace please")
        }
        if((/[\w\d\W\S]{8}/).test(e.target.value) == false){
            error.push("password needs a minimum of 8 characters")
        } 
        errorRef.current.innerHTML = ""
        if(error.length > 0){
            errorRef.current.innerHTML += ("<p>${0}</p>",error[0])
        }
        let result = (/(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\S])(?=.*\d)(?=.*\d)[\w\d\W\S]{8}/).test(e.target.value)
        if(result == true){
            passwordLabel.current.innerHTML = "Password"
            passwordLabel.current.style.color = "green"
        }
        else if(e.target.value == ""){
            passwordLabel.current.style.color = "red"
            passwordLabel.current.innerHTML = "Input a password please";
        }
        else{
            passwordLabel.current.style.color = "red"
            passwordLabel.current.innerHTML = "input a valid password please";
        }    
    }
    // eye change icon handler
    let eyeHandler = function(e){
        if(eyeState == true){
            setEyeState(false)
            passwordRef.current.setAttribute("type","text")
        }
        else{
            setEyeState(true)
            passwordRef.current.setAttribute("type","password")          
        }
    }    
    let emailHandler = function(e){ 
        /*Note that this is my email validation
        man my own creation.
        Its good to have your own validation criteria*/
        let result = e.target.value.match(/^\w+(\.\*&\d\w)*@\w+(\.)*(\.+\w{2,3}){1,2}/);
        if(result != null){
            setEmailRightState(true)
            emailLabelRef.current.innerHTML = "Email adress"
            emailLabelRef.current.style.color = "green"
            //emailRef.current.value = e.target.value;
        }
        else if(e.target.value == ""){
            setEmailRightState(false)
            emailLabelRef.current.style.color = "red"
            emailLabelRef.current.innerHTML = "Input a value for the email please";
        }
        else{
            setEmailRightState(false)
            emailLabelRef.current.style.color = "red"
            emailLabelRef.current.innerHTML = "input a valid email please";
        }
    }

    let skillHandler = function(e){
        e.preventDefault()
    }
    let regionHandler = function(e){
        e.preventDefault()
    }
    let phoneHandler = function(e){
        e.preventDefault()
    }
    let signHandler = function(e){
        e.preventDefault()
        let userName = e.target.userName.value
        let email = e.target.email.value
        let skill = e.target.skill.value
        let phone = e.target.phone.value
        let region = e.target.region.value
        let password = e.target.password.value

        if((userName && email) && (phone && password)){
            e.target.password.value = null
            e.target.email.value = null
            e.target.skill.value = null
            e.target.userName.value = null
            e.target.phone.value = null
            e.target.region.value = null

            signupApi({userName,email,skill,password,phone,region}).then(function(result){
                if(result.object){
                    // returning object since I know what it has.
                    //redirect to the login page now for login
                    let err = result.object
                    setPopupViewState(<PopUpComponent alertText={err}/>)
                    setCurrentViewState(<LoginComponent setPopupViewState={setPopupViewState} setCurrentViewState={setCurrentViewState} setLoginState={setLoginState} setForgotState={setForgotState} setPrepRoomState={setPrepRoomState}/>)
                }
                else{
                    let err = result.err
                    setPopupViewState(<PopUpComponent alertText={err}/>)
                }
            }).catch(function(err1){
                let err = "oops sorry please try again"
                setPopupViewState(<PopUpComponent alertText={err}/>)
            })    
        }
        else{
            let err = "all fields must be filled"
            setPopupViewState(<PopUpComponent alertText={err}/>)
        }

    }
    return(
        <div>
            <form onSubmit={signHandler} className=" w-full py-4 h-full flex flex-col justify-evenly items-center">
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={userNameLabelRef} htmlFor="userName" className="text-green-500 font-bold">Full Name</label>
                    <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                        <i className="text-green font-bold text-green-600"><FaEnvelope/></i>
                        <input ref={userNameRef} name="userName" id="userName" placeholder="Full Name" onChange={userNameHandler} type="text" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                    </div>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={emailLabelRef} htmlFor="Email" className="text-green-500 font-bold">Email address</label>
                    <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                        <i className="text-green font-bold text-green-600" ><FaUser/></i>
                        <input ref={emailRef} name="email" id="email" placeholder="Email address" onChange={emailHandler} type="text" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                    </div>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={phoneLabelRef} htmlFor="phone" className="text-green-500 font-bold">telephone</label>
                    <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                        <i className="text-green font-bold text-green-600" ><FaMobile/></i>
                        <input ref={phoneRef} name="phone" id="phone" placeholder="telephone no" onChange={phoneHandler} type="text" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                    </div>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={regionLabelRef} htmlFor="region" className="text-green-500 font-bold">Region</label>
                    <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                        <i className="text-green font-bold text-green-600" ><FaGlobeAfrica/></i>
                        <input ref={regionRef} name="region" id="region" placeholder="region" onChange={regionHandler} type="text" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                    </div>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={skillLabelRef} htmlFor="skill" className="text-green-500 font-bold">Skill</label>
                    <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                        <i className="text-green font-bold text-green-600" ><FaFootballBall/></i>
                        <input ref={skillRef} name="skill" id="skill" placeholder="skill/talent" onChange={skillHandler} type="text" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                    </div>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={passwordLabel} htmlFor="password" className="text-green-500 font-bold">password</label>
                    <div className="flex items-center gap-2 w-full h-auto">
                        <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                            <i className="text-green font-bold text-green-600"><FaKey/></i>
                            <input ref={passwordRef} name="password" id="password" onChange={passwordHandler} placeholder="password" type="password" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                        </div>
                        <i onClick={eyeHandler} className="text-xl  font-bold text-green-600">{eyeState == true ?  <FaRegEye/> : <FaRegEyeSlash/>}</i>   
                    </div>
                </div>
                <div className="text-red-600" ref={errorRef} style={{width: "76%",height: "auto",textAlign: "left"}}></div>
                <button type="submit" className="bg-green-500 rounded-xl font-bold dark:text-black text-white px-8 py-3">Join us</button>
            </form>
        </div>
    )
}

export function ActualLogin({setPopupViewState}){
    const [eyeState,setEyeState] = useState(true)
    const [emailRightState,setEmailRightState] = useState(false)

    const emailLabelRef = useRef(null)
    const emailRef = useRef(null)
    const passwordLabel = useRef(null)
    const passwordRef = useRef(null)
    const errorRef = useRef(null)


    let passwordHandler = function(e){
        let error = []   
        if((/[a-z]/).test(e.target.value) == false){
            error.push("key in a lower case letter")
        }
        if((/[A-Z]/).test(e.target.value) == false){
            error.push("key in an uppercase letter")
        }
        if((/\d/).test(e.target.value) == false){
            error.push("key in a digit please")
        }
        if((/\s/).test(e.target.value) == true){
            error.push("remove any whitespace please")
        }
        if((/[\w\d\W\S]{8}/).test(e.target.value) == false){
            error.push("password needs a minimum of 8 characters")
        } 
        errorRef.current.innerHTML = ""
        if(error.length > 0){
            errorRef.current.innerHTML += ("<p>${0}</p>",error[0])
        }
        let result = (/(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\S])(?=.*\d)(?=.*\d)[\w\d\W\S]{8}/).test(e.target.value)
        if(result == true){
            passwordLabel.current.innerHTML = "Password"
            passwordLabel.current.style.color = "green"
        }
        else if(e.target.value == ""){
            passwordLabel.current.style.color = "red"
            passwordLabel.current.innerHTML = "Input a password please";
        }
        else{
            passwordLabel.current.style.color = "red"
            passwordLabel.current.innerHTML = "input a valid password please";
        }    
    }
    // eye change icon handler
    let eyeHandler = function(e){
        if(eyeState == true){
            setEyeState(false)
            passwordRef.current.setAttribute("type","text")
        }
        else{
            setEyeState(true)
            passwordRef.current.setAttribute("type","password")          
        }
    }    
    let emailHandler = function(e){ 
        /*Note that this is my email validation
        man my own creation.
        Its good to have your own validation criteria*/
        let result = e.target.value.match(/^\w+(\.\*&\d\w)*@\w+(\.)*(\.+\w{2,3}){1,2}/);
        if(result != null){
            setEmailRightState(true)
            emailLabelRef.current.innerHTML = "Email adress"
            emailLabelRef.current.style.color = "green"
            //emailRef.current.value = e.target.value;
        }
        else if(e.target.value == ""){
            setEmailRightState(false)
            emailLabelRef.current.style.color = "red"
            emailLabelRef.current.innerHTML = "Input a value for the email please";
        }
        else{
            setEmailRightState(false)
            emailLabelRef.current.style.color = "red"
            emailLabelRef.current.innerHTML = "input a valid email please";
        }
    }


    let loginHandler = function(e){
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(`the login data: email: ${email} \n password: ${password}`)
        if(email && password){
            e.target.email.value = null
            e.target.password.value = null
            login({email,password}).then(function(data){
                console.log("returned some data from the login api")
                // if there's no error then do this.
                if(data.err == null){
                    let tokenAndUser = data.object
                    let token = tokenAndUser.split(",")[0]
                    let userName = tokenAndUser.split(",")[1]
                    
                    // save this data for persistent local storage
                    window.localStorage.setItem("IchangeUser",tokenAndUser)

                    /*
                    reduxDispatch(loginAction({token:token,userName:userName}))
                    reduxDispatch(socketUpdate({socket: io(process.env.SOCKET_SERVER,{
                        auth : {
                            // use a different name for what you're passing to the token
                            token : token
                        }
                    })*/
                }
                    // so the best way is to add a state for determining whether the prepRoom shuld be shown to facilitate showing or not showing of it.
                    // remember if the data is valid a json web token should be returned of which here I've not used it.
                    // if the data is valid take him to the home page.
                    // so here is where I do research on redirecting in react.
                    // Here I want to try and pass a component directly and see if it would be rendered.    
                    // Find a wau of rendering it leave alone calling it.
                    //<PrepRoom/>
                else{
                    // if it's not invalid password then show the signup view
                    if(data.err.indexOf("invalid password") == -1){
                        // If there's no web token,then present the signup view
                        let err = "please sign up"
                        setPopupViewState(<PopUpComponent alertText={err}/>)
                    }
                    // alert the invalid password err
                    else{
                        let err = "invalid password"
                        setPopupViewState(<PopUpComponent alertText={err}/>)
                    }

                }
            }).catch(function(err1){
                //ensure that the same page is still rendered.
                let err = "oops sorry please try again"
                console.log(`error found: ${err1}`)
                setPopupViewState(<PopUpComponent alertText={err}/>)
            })    
        }
        else{
            let err = "all fields must be filled first"
            setPopupViewState(<PopUpComponent alertText={err}/>)
        }
    }
    return(
        <div>
            <form onSubmit={loginHandler} className="w-full py-4 h-full flex flex-col justify-evenly items-center">
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={emailLabelRef} htmlFor="Email" className="text-green-500 font-bold">Email address</label>
                    <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                        <i className="text-green font-bold text-green-600" ><FaEnvelope/></i>
                        <input ref={emailRef} name="email" id="email" placeholder="Email address" onChange={emailHandler} type="text" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                    </div>
                </div>
                <div className="flex gap-3 w-5/6 h-24 flex-col">
                    <label ref={passwordLabel} htmlFor="password" className="text-green-500 font-bold">password</label>
                    <div className="flex items-center gap-2 w-full h-auto">
                        <div className="flex items-center gap-2 dark:bg-green-950 bg-black rounded-xl w-[80%] h-12 pl-2 ">
                            <i className="text-green font-bold text-green-600"><FaKey/></i>
                            <input ref={passwordRef} name="password" id="password" onChange={passwordHandler} placeholder="password" type="password" className="w-5/6 outline-none border-none bg-transparent h-full"/>
                        </div>
                        <i onClick={eyeHandler} className="text-xl  font-bold text-green-600">{eyeState == true ?  <FaRegEye/> : <FaRegEyeSlash/>}</i>   
                    </div>
                </div>
                <div className="text-red-600" ref={errorRef} style={{width: "76%",height: "auto",textAlign: "left"}}></div>
                <button type="submit" className="bg-green-500 rounded-xl font-bold dark:text-black text-white px-8 py-3">Join us</button>
            </form>
        </div>
    )
}

export function PopUpComponent(props){
    const alertText = props.alertText
    const  [visibilityState,setVisibilityState] = useState("hidden")
    const [displayState,setDisplayState] = useState("none")
    useEffect(function(){
        if(alertText){
            setVisibilityState("visible")
            setDisplayState("block")
            setTimeout(function(){
                setVisibilityState("hidden")
                setDisplayState("none")
            },3000)    
        }
        // giving it a prop variable ensures it renders anytime it's passed a prop.
    },[props])
    return(
        <div style={{width:"20rem",minHeight:"4rem",backgroundColor:"blue",color:"white",zIndex:"15",position:"absolute",top:"0rem",left:"0",right:"0",margin:"auto",display:displayState,visibility:visibilityState}}>
            <div className="alert-title"><FaMailBulk style={{fontSize:"1.5rem"}}/>I-Change Alert</div>
            <hr className="alert-boundary"/>
            <div className="alert-body">{alertText}</div>
        </div>
    )
}
