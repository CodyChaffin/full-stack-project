import { useEffect, useState } from "react"
import AddVideoForm from "./AddVideoForm"
import UserVideoCard from "./UserVideoCard"


function UserProfile({currentUser}){
const [userVideos, setUserVideos] = useState(currentUser.videos)
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
    // const deleteItem = cartItems.filter(cart =>cart.id !== item.id)
    // setCartItems(deleteItem)

    
    
    // [usrVids, setVids] = useState(currentUser.vids)
    return (
        <>
            <button>Log Out</button>
            <AddVideoForm  currentUser= {currentUser} setUserVideos={setUserVideos} userVideos={userVideos}/>
           {userVideos.map(video =>(<UserVideoCard  video = {video} deleteHandler={deleteHandler}/>))}
        </>
    )
}
// }setVids={setVids}
export default UserProfile