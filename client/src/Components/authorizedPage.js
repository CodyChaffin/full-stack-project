import VideoContainer from "./VideoContainer"
import { useNavigate } from "react-router"

function MainPage({currentUser}){
    // function user() {
    //     fetch(`/users/${currentUser.id}`)
    // }
    const navigate = useNavigate();
    

    return (
        <>
        <button onClick={()=>navigate("/my-profile")}style={{position: "fixed"}}>{currentUser.name}</button>
        <VideoContainer currentUser={currentUser}/>
        </>
    )
}


export default MainPage