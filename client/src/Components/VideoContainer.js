import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"


function VideoContainer({currentUser}){
    const [videos, setVideos] = useState([])
    
    
    useEffect(() => {
        fetch("/videos")
        .then(resp => resp.json())
        .then(vids=> setVideos(vids))
    },[])
     
    return (
        <>
        {videos.map(vid=>(<VideoCard vid = {vid} currentUser={currentUser}/>))}
        </>
    )
}

export default VideoContainer