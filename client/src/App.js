import LoginSigninPage from "./Components/unauthorizedPage";
import mainPage from "./Components/authorizedPage";
import React, { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(null)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            // console.log(user)
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
    {/* // <Router> */}
      {currentUser ? (
          <mainPage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <LoginSigninPage
            setCurrentUser={setCurrentUser}
          />
        )
      }
    {/* // </Router> */}
    </>
  )
}
  

export default App;
