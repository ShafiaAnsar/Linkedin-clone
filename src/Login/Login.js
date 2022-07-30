import {React,useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import './Login.css'
function Login() {
  const [email,setEmail]=useState("")
  const [name,setName]=useState('')
  const[password,setPassword] =useState('')
  const[profilePic,setProfilePic] =useState('')
  const dispatch=useDispatch()

  const loginToApp=(e)=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then((userAuth)=>{
      dispatch(login({
        email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl:userAuth.user.photoURL ,
      }))
    }).catch((error=> alert(error)))
  }
  const register= ()=>{
    if(!name){
      return alert("Please enter a full name")
    }
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoUrl:profilePic,
      })
      .then(()=>{
        dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:name,
          photoUrl:profilePic,
        }))
      })
    }).catch(error=>alert (error))
  }
  return (
    <div className='login'>
        <img src='https://imgs.search.brave.com/Hj4v9SHalMpUOFfeVu2OUOZuZAqFXQwzs3VzlnJ9txg/rs:fit:1872:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/V0RWbnJ4dVotb3FC/UG9tTXJkVnVnSGFC/NCZwaWQ9QXBp' alt=''/>
        <form>
          <input value={name} onChange={(e) =>setName(e.target.value)} type='text' placeholder='Full name {required if registering}'/>
          <input value={profilePic} onChange ={(e)=>setProfilePic(e.target.value)}type='text' placeholder='Profile pic URL {optional}'/>
         <input placeholder='Email' type='email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
          <input value={password}  onChange={(e) =>setPassword(e.target.value)}placeholder='Password' type='password' />
          <button type='submit' onClick={loginToApp}>
            Sign in 
          </button>
        </form>
        <p>Not a member? {" "}
          <span className='login_register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login