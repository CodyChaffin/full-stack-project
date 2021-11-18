import VideoContainer from "./VideoContainer"

function MainPage({currentUser}){



    return (
        <>
        <h1 style={{position: "fixed"}}>{currentUser.name}</h1>
        <VideoContainer/>
        </>
    )
}


export default MainPage