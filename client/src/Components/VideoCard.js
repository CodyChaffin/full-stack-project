import { useEffect, useState } from "react"
import AddCommentForm from "./AddCommentForm"

function VideoCard({vid, currentUser}){
    const embedId = vid.url
    
    const [vidCom, setVidCom]= useState(vid.comments)
    

  
    return (
        <div style={{textAlign: "center", padding: "50px"}}>
        <h1>{vid.title}</h1>
        <iframe width="853" height="480" src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className = "card" >    
       <h3> Likes : {vid.likes}</h3>
        <h3>Views : {vid.veiws}</h3>
        <p style={{fontSize : 25, textAlign: "center"}}>{vid.description}</p>
        </div>
        <div className = "comCard">
        {vid.comments.map(comment=><ul>{comment.remark} by {vid.user.name}  </ul>)}
        
        <AddCommentForm currentUser={currentUser} vid={vid} vidCom={vidCom} setVidCom={setVidCom} />
        </div>
        </div>
    )
}

export default VideoCard