import React from 'react'
// import Property from './Property';
import { CallContext } from './Context'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const {user, setUser, email, setEmail} = CallContext()
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser(user)
    setEmail(email)
    console.log("hello everyone", user , 'is the user');
    navigate('/practice')
  }
  return (
    <div>
      About
<form onSubmit={handleSubmit}>
<label htmlFor="user">Name</label>
<input type="text" name='user' style={{border: '1px solid red', padding: '5px 10px'}} value={user} onChange={(e)=>setUser(e.target.value)} />
<br />
<br />
<label htmlFor="email">Email</label>
<input type="email" name='email' style={{border: '1px solid red', padding: '5px 10px'}} value={email} onChange={(e)=>setEmail(e.target.value)} />
<br />
<button type='submit' style={{border: '1px solid blue'}}>Submit</button>
</form>

    </div>
  )
}

export default About