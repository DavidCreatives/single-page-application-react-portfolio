import React from "react"
import { useState } from "react"

function App(){
  const [username, setUsername] = useState('username')

  return(
      <div className="HomePage">
        <h1>Homepage</h1>
        <input type="text" name="username"/>
        <button onClick={() => setUsername}>Set as Username</button>
      </div>
  )
}

export default App