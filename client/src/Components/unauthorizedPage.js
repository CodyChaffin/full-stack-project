import LoginForm from "./LoginForm"


function LoginSigninPage({setCurrentUser}){
    return (
        <div>
         <h1>Log In to your account and start watching today</h1>

            <LoginForm setCurrentUser={setCurrentUser}/>
        </div>
    )
}
    
export default LoginSigninPage