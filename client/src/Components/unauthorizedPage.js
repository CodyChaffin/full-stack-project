import LoginForm from "./LoginForm"
import unauthorizedPage from './unauthorizedPage.module.css';



function LoginSigninPage({setCurrentUser}){
    return (
        <div className ={unauthorizedPage.body}>
        <img className = "logo" src="/images/project-logo.jpg" alt="" />
         <h1>Create an account or Log In to contine</h1>
            <LoginForm setCurrentUser={setCurrentUser}/>
    
        </div>
    )
}
    
export default LoginSigninPage