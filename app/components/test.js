import "./Login.css"
import {FaEnvelope, FaEye, FaFacebook, FaGithub, FaGoogle, FaKey, FaUser,FaRegEye,FaRegEyeSlash, FaQuestionCircle, FaKeybase, FaKeycdn, FaTiktok, FaClosedCaptioning, FaWindowClose, FaBars, FaFileSignature, FaCheckCircle, FaMailBulk, FaMailchimp, FaEnvelopeOpen, FaEnvelopeOpenText} from "react-icons/fa"
import React, { useEffect } from "react"
import {useState,useRef} from "react"
import {login,otpSender,forgot,signupApi,otpVerifier} from "./apis"
import { Scheduler } from "./codeSpaceSchedule"
import { PopUpComponent } from "./codeRoom"

import {io} from "socket.io-client" // socket client

// redux
import {useSelector,useDispatch} from "react-redux"
import {loginAction,socketUpdate} from "./states/newReducer"

// This one has both the login and the signup jsx.
// remember this one has to also  receive incorrect passwords and error responses from the server and display them accordingly to the user
// that means that its like no API here lacks a response to offer. The error responses should come directly to the exact labels 
function Authentication(){
    //functional states    
    const [loginState,setLoginState] = useState(false)
    const [popupViewState,setPopupViewState] = useState()
    const [currentViewState,setCurrentViewState] = useState()
    // confirm state, used  to determine whether the signUp confirmation should be displayed or not
    const [confirmState,setConfirmState] = useState(false)
    // forgotState, used to determine whether the forgot password view should be displayed or not.
    const [forgotState,setForgotState] = useState(false)
    //resetState, determines whether the user should be allowed to set a new password
    // provides the view for entering new password
    const [resetState,setResetState] = useState(false)    
    // return it back to false
    const [prepRoomState,setPrepRoomState] = useState(false)

    // Redux dispatch
    const reduxDispatch = useDispatch()

    //visual states
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
    const passwordLabel = useRef(null)
    const password = useRef(null)
    const errorRef = useRef(null)
    const lockRef = useRef(null)
    const userNameLabelRef = useRef(null)
    const fullNameLabelRef = useRef(null)
    
    useEffect(function(){
        setCurrentViewState(
        <LoginComponent setPopupViewState={setPopupViewState} setCurrentViewState={setCurrentViewState}/>
        )
    },[])

    //userName handler
    let userNameHandler = function(e){
        let result = e.target.value
        if(result != ""){
            userNameLabelRef.current.innerHTML = "UserName"
            userNameLabelRef.current.style.color = "blue"
        }
        else if(result == ""){
            userNameLabelRef.current.style.color = "red"
            userNameLabelRef.current.innerHTML = "Input a value for the username please";
        }
        else{
            userNameLabelRef.current.style.color = "red"
            userNameLabelRef.current.innerHTML = "Input a valid value please";
        }  
    }

    // The emailHandler
    let emailHandler = function(e){ 
        /*Note that this is my email validation
        man my own creation.
        Its good to have your own validation criteria*/
        let result = e.target.value.match(/^\w+(\.\*&\d\w)*@\w+(\.)*(\.+\w{2,3}){1,2}/);
        if(result != null){
            setEmailRightState(true)
            emailLabelRef.current.innerHTML = "Email adress"
            emailLabelRef.current.style.color = "blue"
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
            passwordLabel.current.style.color = "blue"
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
            password.current.setAttribute("type","text")
        }
        else{
            setEyeState(true)
            password.current.setAttribute("type","password")          
        }
    }
    //full name handler
    let fullNameHandler = function(e){
        let result = e.target.value
        if(result != ""){
            fullNameLabelRef.current.innerHTML = "Full Name"
            fullNameLabelRef.current.classList.remove("label-invalid")
            fullNameLabelRef.current.classList.add("label-valid")
        }
        else if(result == ""){
            fullNameLabelRef.current.classList.remove("label-valid")
            fullNameLabelRef.current.classList.add("label-invalid")
            fullNameLabelRef.current.innerHTML = "Input a value for the fullname please";
        }
        else{
            fullNameLabelRef.current.classList.remove("label-valid")
            fullNameLabelRef.current.classList.add("label-invalid")
            fullNameLabelRef.current.innerHTML = "Input a valid value please";
        }
    }

    // Logic when the user is signedUp.
    // login functionality
    return (
        <div style={{width:"100%",height:"100vh",backgroundColor:"black",padding:"0",margin:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>
        {popupViewState}
        {currentViewState}
        </div>
    )
}

//signup component
function SignUpComponent({setPopupViewState,setForgotState,setLoginState,setPrepRoomState,setCurrentViewState}){
    let signUpHandler = function(e){
        e.preventDefault()
        let userName = e.target.username.value
        let email = e.target.email.value
        let fullName = e.target.fullName.value
        let password = e.target.password.value
        if((userName && email) && (fullName && password)){
            e.target.password.value = null
            e.target.email.value = null
            e.target.fullName.value = null
            e.target.username.value = null
            signupApi({userName : userName,email: email,fullName: fullName,password: password}).then(function(result){
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
    // the redirectHandler here is different from the loginOne that's why I've not kept it in the larger component
    let redirectHandler = function(e){
        e.preventDefault()
        // to call the login page.
        setCurrentViewState(
            <LoginComponent setPopupViewState={setPopupViewState} setCurrentViewState={setCurrentViewState}/>
            )    
    }
    return(
        <main>
        <div className="left-side">
            <div className="bottom-right"></div>
        </div>
        <div className="right-side">
            {confirmState == false ?
            <form className="form-div" onSubmit={signUpHandler} method="post">
                <h1 className="logo-title"><span className="first-letter">G</span>itChat</h1>
                <h1 className="form-title">Sign up</h1>
                <div className="input-group">
                    <label htmlFor="fullName" className="label-full-name">Full Name</label>
                    <div className="input-with-icon">
                        <i className="fa-solid fa-user fa-lg fa-fw"><FaUser/></i>
                        <input type="text" name="fullName" placeholder="full-name" className="full-name"/>    
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="username" className="label-username">UserName</label>
                    <div className="input-with-icon">
                        <i className="fa-solid fa-user-alt-slash fa-lg fa-fw" ><FaUser/></i>
                        <input type="text" name="username" placeholder="username" className="username"/>    
                    </div>
                </div>            
                <div className="input-group">
                    <label htmlFor="email" ref={emailLabelRef} className="label-email">Email adress</label>
                    <div className="input-with-icon">
                        <i className="fa-solid fa-envelope fa-lg fa-fw" ><FaEnvelope/></i>
                        <input type="text" name="email" onChange={emailHandler} ref={emailRef}  placeholder="email address" className="email"/>    
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="password" ref={passwordLabel} className="label-password">Password</label>
                    <div className="input-with-icon">
                        <i className="fa-solid fa-key fa-lg fa-fw"><FaKey/></i>   
                        <input type="password" name="password" ref={password} onChange={passwordHandler} placeholder="password" className="password"/>
                        <i onClick={eyeHandler} className="fa-solid fa-eye lock-icon fa-lg fa-fw">{eyeState == true ?  <FaRegEye/> : <FaRegEyeSlash/>}</i>   
                    </div>
                </div>
                <div ref={errorRef} className="error-div"></div>
                <div className="check-group">
                    <input type="checkbox" name="remembe-me"/>
                    <label htmlFor="remember-me">remember me</label>    
                </div>
                <button type="submit" className="submit-btn">Sign up</button>
                <p className="redirect-paragraph" onClick={redirectHandler}>Already have an account? <a href="#">Login</a></p>
                <div className="or-div"><hr/><p className="or-text">Or</p><hr/></div>
                <button className="third-party"><i className="fa-brands fa-google fa-lg fa-fw"><FaGoogle/></i>Sign up with google</button>
            </form>
            :
            <>
            <form className="form-div" style={{display: "flex",flexDirection: "column",alignItems:"center"}}>
                <h1 style={{color: "blue"}}>GitChat</h1>
                <div style={{position:"relative",width: "10rem",height:"10rem",padding: "1rem",borderRadius: "50%"}}>
                    <FaEnvelopeOpen style={{width: "8rem",height:"8rem",color: "blue"}}/>
                    <FaEnvelopeOpenText style={{width: "5rem",height: "5rem",borderRadius: "50%",position: "absolute",bottom: "1.6rem",right: "2.4rem",backgroundColor: "blue",color:"white"}}/>
                </div>
                <h2 style={{color:"blue"}}>Email Confirmation</h2>
                <p style={{color: "blue"}}>Input the OTP sent to your email</p>
                <div className="input-group" style={{height: "auto"}}>
                    <label htmlFor="email" className="label-email">OTP pin</label>
                    <div className="input-with-icon" style={{height: "2.5rem"}}>
                        <i className="fa-solid fa-envelope fa-lg fa-fw" ><FaKey/></i>
                        <input type="text"  name="email" ref={emailRef}  placeholder="OTP pin" className="email"/>    
                    </div>
                </div>
            </form>
            </>
            }
        </div>
    </main>

    )
}

//forgotComponent
function ForgotComponent({setPopupViewState,setForgotState}){
    const [visibilityState,setVisibilityState] = useState("hidden")
    const [displayState,setDisplayState] = useState("none")
    const [visibilityState2,setVisibilityState2] = useState("hidden")
    const [displayState2,setDisplayState2] = useState("none")

    let forgotStyle = {
        width: "80%",
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'white'
    }
    let leftStyle = {
        width: "60%",
        height: "100%",
        backgroundColor: "blue",
        position: "relative"
    }
    let bottomRightStyle = {
        width: "80%",
        height: "50%",
        position: "absolute",
        bottom: "0rem",
        right: "0rem",
        backgroundColor: "white"
    }
    let rightSide = {
        width: "40%",
        height: "100%",
        padding: "1rem",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0rem"
    }
    let iconStyle = {
        position: "relative",
        width: "7rem",
        height: "7rem",
        borderRadius: "50%",
        backgroundColor: "rgba(0,0,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        padding: "0.8rem",
        margin: "1rem"
    }
    let keyStyle = {
        width: "6rem",
        height: "6rem",
        color: "blue"
    }
    let helpStyle = {
        position: "absolute",
        bottom: "0rem",
        right: "0rem",
        zIndex: "5rem",
        width: "3.5rem",
        height: "3.5rem",
        color: 'white',
        backgroundColor: "blue",
        borderRadius: "50%"
    }
    let titleStyle = {
        color: "blue",
        fontSize: "1.3rem",
        fontWeight: "bold"
    }
    let pinStyle = {
        visibility : visibilityState,
        display: displayState
    }
    let submitStyle = {
        width: "15rem",
        height: "2.5rem",
        borderRadius: "1rem",
        fontSize: "1rem",
        fontWeight: "bold",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        outline: "none",
        marginTop: "0.5rem"
    }
    let inputStyle = {
        outline: "none",
        border: "none",
        width: "90%",
        height: "100%",
        fontWeight: "bold",
        paddingLeft: "0.5rem"                            
    }
    let formStyle = {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
        textAlign: "center"
    }
    let outerFormStyle = {
        width: "100%",
        height: "auto"
    }
    let forgotTitle = {
        color: "rgba(0,0,255)",
        fontWeight: "bold",
        marginBottom: "1rem"
    }
    let forgotDetails = {
        color: "rgba(0,0,255)",
        width: "80%"

    }
    let pStyle = {
        visibility: visibilityState2,
        display: displayState2
    }
    let forgotSubmitHandler = function(e){
        e.preventDefault()
        //call the forgotApi with the parameters.
        let userName = e.target.userName.value
            // this function takes two parameters
        let password = e.target.password.value
        let otp = e.target.otp.value
        if(userName.length > 0 && otp.length < 1){
            // call the otpSender api
            otpSender(userName).then(function(response){
                if(response.object != null){
                    // if email sent then let the window for inputing otp be displayed
                    setVisibilityState("visible")
                    setDisplayState("flex")                
                    let err = response.object
                    setPopupViewState(<PopUpComponent alertText={err}/>)
                }
                else{
                    let err = response.err
                    setPopupViewState(<PopUpComponent alertText={err}/>)
                }
            }).catch(function(err1){
                let err = "oops sorry please try again"
                setPopupViewState(<PopUpComponent alertText={err}/>)
            })
        }
        // here I also want to test for the validity of the otp before bringing on the place to insert a new password,
        // so I'm going to have a otpValid state
        else if(otp.length > 0 && password.length < 1){
            //calll the otpVerifier
            otpVerifier(otp).then(function(result){
                if(result.err == null){
                    // display only after verification
                    setVisibilityState2("visible")
                    setDisplayState2("flex")        
                    let err = "verified"
                    setPopupViewState(<PopUpComponent alertText={err}/>)    
                }
                else{
                    let err = result.err
                    setPopupViewState(<PopUpComponent alertText={err}/>)    
                }
            }).catch(function(err1){
                let err = "oops sorry please try again"
                setPopupViewState(<PopUpComponent alertText={err}/>)    
            })
            // call the otp api
        }
        else{
            // if there's a password input then call the forgot api
            forgot(userName,password).then(function(data){
                if(data.err == null){
                    // set the res
                    // return the view back to the login page.
                    setForgotState(false)
                    let err = "password changed successfuly"
                    setPopupViewState(<PopUpComponent alertText={err}/>)    
                }
                else{
                    let err = data.err
                    setPopupViewState(<PopUpComponent alertText={err}/>)    
                    //display the error on the label part of the input type.
                }
            }).catch(function(err1){
                let err = "oops sorry please try again"
                setPopupViewState(<PopUpComponent alertText={err}/>)    
            })    
        }     
    }
    return(
        <div style={forgotStyle}>
        <div style={leftStyle}>
            <div style={bottomRightStyle}></div>
        </div>
        <div style={rightSide}>
            <div style={titleStyle}>GitChat</div>
            <div style={iconStyle}>
                <FaKey style={keyStyle}/>
                <FaQuestionCircle style={helpStyle}/>
            </div>
            <div style={forgotTitle}>Forgot password ?</div>
                <form onSubmit={forgotSubmitHandler} style={formStyle} className="resetForm">
                    <div className="input-group">
                        <label htmlFor="userName"   className="label-email">username</label>
                        <div className="input-with-icon">
                            <i className="fa-solid fa-envelope fa-lg fa-fw" ><FaEnvelope/></i>
                            <input type="text" name="userName" style={inputStyle}  placeholder="username" className="email"/>    
                            <i className="fa-solid fa-eye lock-icon fa-lg fa-fw">{/*emailRightState == false ? <FaWindowClose style={{color:"red",backgroundColor: "white",borderRadius:"50%",padding:"0rem"}}/> : <FaCheckCircle/>*/}</i>   
                        </div> 
                    </div>
                    <div className="input-group" style={pinStyle}>
                        <label htmlFor="otp" className="label-email">Enter OTP sent to your email address</label>
                        <div className="input-with-icon">
                            <i className="fa-solid fa-user-alt-slash fa-lg fa-fw" ><FaKey/></i>
                            <input type="text" name="otp" placeholder="reset pin" className="username"/>    
                        </div>
                    </div>
                    <div className="input-group" style={pStyle}>
                        <label htmlFor="password" ref={passwordLabel} className="label-password">new password</label>
                        <div className="input-with-icon">
                            <i className="fa-solid fa-key fa-lg fa-fw"><FaKey/></i>   
                            <input type="password" name="password" ref={password} onChange={passwordHandler} placeholder="password" className="password"/>
                            <i onClick={eyeHandler} className="fa-solid fa-eye lock-icon fa-lg fa-fw">{eyeState == true ?  <FaRegEye/> : <FaRegEyeSlash/>}</i>   
                        </div>
                    </div>
                    <div className="error-div" ref={errorRef} style={{width: "76%",height: "auto",textAlign: "left"}}></div>
                    <button type="submit"  style={submitStyle}>submit</button>              
                </form>
        </div>
    </div>
    )
}

function LoginComponent({setPopupViewState,setForgotState,setLoginState,setPrepRoomState,setCurrentViewState}){
    const reduxDispatch = useDispatch()
    const [eyeState,setEyeState] = useState(true)
    const [visibilityState,setVisibilityState] = useState("hidden")
    const [displayState,setDisplayState] = useState("none")
    const [visibilityState2,setVisibilityState2] = useState("hidden")
    const [displayState2,setDisplayState2] = useState("none")
    const [emailRightState,setEmailRightState] = useState(false)

    const emailLabelRef = useRef(null)
    const emailRef = useRef(null)
    const passwordLabel = useRef(null)
    const password = useRef(null)
    const errorRef = useRef(null)
    const lockRef = useRef(null)
    const userNameLabelRef = useRef(null)
    const fullNameLabelRef = useRef(null)

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
            passwordLabel.current.style.color = "blue"
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

    let forgotLinkHandler = function(e){
        //set the forgotState to true.
        setCurrentViewState(
            <ForgotComponent setCurrentViewState={setCurrentViewState} setLoginState={setLoginState} setForgotState={setForgotState} setPrepRoomState={setPrepRoomState}/>
        )
    }


    let eyeHandler = function(e){
        if(eyeState == true){
            setEyeState(false)
            password.current.setAttribute("type","text")
        }
        else{
            setEyeState(true)
            password.current.setAttribute("type","password")          
        }
    }
    let redirectHandler = function(e){
        e.preventDefault()
        // to call the signup page.
        setCurrentViewState(<SignUpComponent setPopupViewState={setPopupViewState} setCurrentViewState={setCurrentViewState} setLoginState={setLoginState} setForgotState={setForgotState} setPrepRoomState={setPrepRoomState}/>)
    }

    let loginHandler = function(e){
        e.preventDefault()
        let userName = e.target.userName.value
        let password = e.target.password.value
        if(userName && password){
            e.target.userName.value = null
            e.target.password.value = null
            login(userName,password).then(function(data){
                // if there's no error then do this.
                if(data.err == null){
                    setCurrentViewState(<Scheduler setPopupViewState={setPopupViewState} setCurrentViewState={setCurrentViewState}/>)
                    let tokenAndUser = data.object
                    let token = tokenAndUser.split(",")[0]
                    let userName = tokenAndUser.split(",")[1]
                    reduxDispatch(loginAction({token:token,userName:userName}))
                    reduxDispatch(socketUpdate({socket: io(process.env.SOCKET_SERVER,{
                        auth : {
                            // use a different name for what you're passing to the token
                            token : token
                        }
                    })
                }))
                    // so the best way is to add a state for determining whether the prepRoom shuld be shown to facilitate showing or not showing of it.
                    // remember if the data is valid a json web token should be returned of which here I've not used it.
                    // if the data is valid take him to the home page.
                    // so here is where I do research on redirecting in react.
                    // Here I want to try and pass a component directly and see if it would be rendered.    
                    // Find a wau of rendering it leave alone calling it.
                    //<PrepRoom/>
                }
                else{
                    // if it's not invalid password then show the signup view
                    if(data.err.indexOf("invalid password") == -1){
                        // If there's no web token,then present the signup view
                        setCurrentViewState(<SignUpComponent setPopupViewState={setPopupViewState} setCurrentViewState={setCurrentViewState} setLoginState={setLoginState} setForgotState={setForgotState} setPrepRoomState={setPrepRoomState}/>)
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
                setPopupViewState(<PopUpComponent alertText={err}/>)
            })    
        }
        else{
            let err = "all fields must be filled first"
            setPopupViewState(<PopUpComponent alertText={err}/>)
        }
    }

    return(
        <main>
        <div className="left-side">
            <div className="bottom-right">
            </div>
        </div>
        <div className="right-side">
            <form className="form-div" onSubmit={loginHandler}  action="" method="post">
                <h1 className="form-title">Log in</h1>
                <div className="input-group">
                    <label htmlFor="userName" className="label-email">userName</label>
                    <div className="input-with-icon">
                        <i className="fa-solid fa-envelope fa-lg fa-fw"><FaEnvelope/></i>
                        <input type="text" name="userName" placeholder="userName" className="email"/>    
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="password" ref={passwordLabel} className="label-password">Password</label>
                    <div className="input-with-icon">
                        <i className="fa-solid fa-key fa-lg fa-fw"><FaKey/></i>   
                        <input type="password" ref={password} onChange={passwordHandler} name="password" placeholder="password" className="password"/>
                        <i onClick={eyeHandler} className="fa-solid fa-eye lock-icon fa-lg fa-fw">{eyeState == true ?  <FaRegEye/> : <FaRegEyeSlash/>}</i>   
                    </div>
                </div>
                <div className="error-div" ref={errorRef}></div>
                <div className="check-group">
                    <input type="checkbox" name="remembe-me"/>
                    <label htmlFor="remember-me">remember me</label>    
                </div>
                <button type="submit"  className="submit-btn">Sign In</button>
                <p className="redirect-paragraph" onClick={redirectHandler}>Don't have an account? <a href="#">Sign Up</a></p>
                <p className="forgotLink" onClick={forgotLinkHandler} style={{textAlign:"center",fontWeight:"bold",color: "blue",cursor:"pointer"}}>Forgot password? <span style={{color: "green"}}>Reset</span></p>
                <div className="or-div"><hr/><p className="or-text">Or</p><hr/></div>
                <button className="third-party"><i className="fa-brands fa-google fa-lg fa-fw"><FaGoogle/></i>Login with google</button>
                <button className="third-party"><i className="fa-brands fa-facebook fa-lg fa-fw"><FaFacebook/></i>Login with facebook</button>
                <button className="third-party"><i className="fa-brands fa-github fa-lg fa-fw"><FaGithub/></i>Login with GitHub</button>
            </form>
        </div>
    </main>
    )
}

export {Authentication}
