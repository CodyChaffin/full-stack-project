import LoginSigninPage from "./Components/unauthorizedPage";
import MainPage from "./Components/authorizedPage";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./Components/UserProfile";
import { useNavigate } from "react-router"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const navigate = useNavigate();

//   const handleLogout = ()=>{
    
//     fetch(`/api/logout/${currentUser.id}`,
//     {method: "DELETE",
//     credentials: 'include'})
//     .then(()=>{
//             setCurrentUser(null)
            
//             navigate("/")
//     })

// }

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <div></div>}
  return (
    <>
     <Routes>
      
      <Route path="/" element={<LoginSigninPage setCurrentUser={setCurrentUser}/>} />
        <Route path="/home" element={<MainPage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser} />}/>
        <Route path="/my-profile" element={ <UserProfile  currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        
      </Routes>
    </>
  )
}
  

export default App;
