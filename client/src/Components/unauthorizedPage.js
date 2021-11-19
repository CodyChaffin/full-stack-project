import { useState } from "react";
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm";
import unauthorizedPage from './unauthorizedPage.module.css';



function LoginSigninPage({setCurrentUser}){
    const [signUp, setSignUp]= useState(false)
    return (
        <div className ={unauthorizedPage.body} style={{textAlign:"center"}}>
        <img className = "logo" src="/images/project-logo.jpg" alt="" />
         <h1>Create an account or Log In to contine</h1>
            {signUp ? null:<LoginForm setCurrentUser={setCurrentUser}/>}
            <button onClick={()=>setSignUp(!signUp)}> {signUp ? "Login":"Sign Up Instead"}</button>
            {signUp ? <SignUpForm setCurrentUser={setCurrentUser}/> : null}
        
        </div>
    )
}
    
export default LoginSigninPage