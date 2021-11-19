import LoginForm from "./LoginForm"


function LoginSigninPage({setCurrentUser}){
    return (
        <div className loginPadding>
        <img className = "logo" src="/images/project-logo.jpg" alt="" />
         <h1>Create an account or Log In to contine</h1>
            <LoginForm setCurrentUser={setCurrentUser}/>
       
        </div>
    )
}
    
export default LoginSigninPage