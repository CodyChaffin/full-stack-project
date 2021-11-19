import { useEffect, useState } from "react"
import AddVideoForm from "./AddVideoForm"
import UserVideoCard from "./UserVideoCard"


function UserProfile({currentUser, setCurrentUser}){
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
    function logOut(){
        fetch(`/logout/${currentUser.id}`,
        {method: "DELETE",
        credentials: 'include'})
        .then(res=>{
            if (res.ok) {
                setCurrentUser(null)}
        })
    }

    
     
    // [usrVids, setVids] = useState(currentUser.vids)
    // return (
    //     <>
    //         <Routes>
    //             <Route path="/"> <button onClick={()=>logOut}>Log Out</button></Route>
    //             <AddVideoForm  currentUser= {currentUser} setUserVideos={setUserVideos} userVideos={userVideos}/>
    //             {userVideos.map(video =>(<UserVideoCard  video = {video} deleteHandler={deleteHandler}/>))},
                
    //         </Routes> 
    //     </>
    // )
}
// }setVids={setVids}
export default UserProfile