import { useContext } from "react"
import { useState } from "react"
import userContext from "../context/UserContext"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser}=useContext(userContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
