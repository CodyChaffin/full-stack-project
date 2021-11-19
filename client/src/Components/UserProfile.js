import { useEffect, useState } from "react"
import AddVideoForm from "./AddVideoForm"
import { useNavigate } from "react-router"
import UserVideoCard from "./UserVideoCard"



function UserProfile({currentUser}){
    const [userVideos, setUserVideos] = useState(currentUser.videos)
    const navigate = useNavigate();
    // const history = useHistory()
    function deleteHandler(id){
        

        fetch(`/videos/${id}`,{
        method : "DELETE"}
        )
        // .then()
       
        
        const deletedVideo= userVideos.filter((vid)=>vid.id !== id)
        setUserVideos(deletedVideo)
        
        return(
            <h3>Video deleted</h3>
        )
        

    }
    
    useEffect(()=>{
        ;
    },[userVideos])
    
    
    
     
    // [usrVids, setVids] = useState(currentUser.vids)
    return (
        <>
           
            <button onClick={()=>navigate('/')}>Log Out</button>
            <AddVideoForm  currentUser= {currentUser} setUserVideos={setUserVideos} userVideos={userVideos}/>
            {userVideos.map(video =>(<UserVideoCard  video = {video} deleteHandler={deleteHandler}/>))},
                
           
        </>
    )
}
// }setVids={setVids}
export default UserProfile