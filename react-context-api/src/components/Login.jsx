import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser}  = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <>
        <h2>Login</h2>
        <input type="text" name="name" id="name" placeholder='username' 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
        />
        <input type="password" name="password" id="password" placeholder='password'
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default Login