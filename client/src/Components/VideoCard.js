
function VideoCard({vid}){
    const embedId = vid.url
    return (
        <div style={{textAlign: "center", padding: "50px"}}>
        <h1>{vid.title}</h1>
        <iframe width="853" height="480" src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
       <h3>Likes : {vid.likes}</h3>
        <h3>Views : {vid.veiws}</h3>
        <p style={{fontSize : 25, textAlign: "center"}}>{vid.description}</p>
        
        <form>
            <input type="text" placeholder="say something"></input>
            
        </form>
        </div>
    )
}

export default VideoCard