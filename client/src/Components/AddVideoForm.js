import React, { useState } from 'react'



export default function AddVideoForm({currentUser, setUserVideos, userVideos}){

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")
    
    
    function handleSubmit(e){
        e.preventDefault()
        
        
        const newVideo = {
            user_id: currentUser.id,
            url: url,
            title: title,
            likes: 0,
            views: 0,
            description: description
        }
    
        const reqOptions = {
            headers : {'Content-Type': 'application/json'},
            method : "POST",
            body : JSON.stringify(newVideo)

        }

        fetch("/videos", reqOptions)
        .then(res => res.json())
        .then(newVid => setUserVideos([newVid, ...userVideos]))
        // const res = await fetch()
        // const newVideo = await res.json()
        //submit everything in state
    }
    
    
    return(
        <form onSubmit={handleSubmit}>
            <input type= "text" placeholder="Title" value= {title} onChange={(e)=> setTitle(e.target.value)}/>
            <input type = "text" placeholder="url" value= {url} onChange={(e)=> setUrl(e.target.value)}/>
            <input type = "text" placeholder="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <input type= "submit" value = "Submit video"/>
        </form>
    )
}




// Video.create(user_id: user1.id, url: "OE0Lpy-ddxU", title: "MHW Iceborne | After you've killed 100 Alatreon", likes: 26000, description: "Thanks to Mzly for teaming up with us", veiws: 1944081)

