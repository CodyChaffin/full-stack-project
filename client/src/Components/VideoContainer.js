import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"


function VideoContainer(){
    const [videos, setVideos] = useState([])
    
    useEffect(() => {
        fetch("/videos")
        .then(resp => resp.json())
        .then(vids=> setVideos(vids))
    },[])
     
    return (
        <>
        {videos.map(vid=>(<VideoCard vid = {vid}/>))}
        </>
    )
}

export default VideoContainer