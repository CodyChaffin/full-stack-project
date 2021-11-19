import { useEffect, useState } from "react"


function UserVideoCard({video, deleteHandler}){
    const embedId = video.url
    const [userComments, setUserComments] = useState(video.comments)
    function handleDelete(id){
        

        fetch(`/comments/${id}`,{
        method : "DELETE", credentials: 'include'}

        )
        
       
        
        const deletedComment= userComments.filter((comment)=>comment.id !== id)
        setUserComments(deletedComment)
        
        return(
            <h3>comment deleted</h3>
        )
        

    }
    
    useEffect(()=>{
        ;
    },[userComments])

    return(
        <div style={{textAlign:"center"}}>
        <h1>{video.title}</h1>
        <iframe width="853" height="480" src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>Likes : {video.likes}</h3>
        <h3>Views : {video.veiws}</h3>
        <button style={{backgroundColor:"red"}} onClick={()=>deleteHandler(video.id)}>Delete</button>
        <p style={{fontSize : 25, textAlign: "center"}}>{video.description}</p>
        
        {userComments.map(comment=><ul>{comment.remark}  <button onClick={()=>handleDelete(comment.id)}style={{backgroundColor: 'orange'}}>delete</button></ul>,)}
        
        </div>
    )
}

export default UserVideoCard