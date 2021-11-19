import { useState } from "react"


function AddCommentForm({currentUser, vid, vidCom, setVidCom}){
    const [remark, setRemark]= useState("")
    function submitHandler(e){
        e.preventDefault()

        const newComment = {
            video_id: vid.id,
            user_id: currentUser.id,
            remark: remark
        }

        const comOptions= {
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify(newComment)
        }
        
        fetch('/comments', comOptions)
        .then(res=>res.json())
        .then(newCom => setVidCom([newCom, ...vidCom]))
        
    }
    
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="say something" value={remark} onChange={(e)=>setRemark(e.target.value)}></input>
            <input type="submit" value="add a comment"/>
        </form>
    )
}

export default AddCommentForm