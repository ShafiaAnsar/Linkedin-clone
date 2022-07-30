import {React,useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './SideBar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widget/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login/Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function App() {
const user =useSelector(selectUser)
 const dispatch =useDispatch()
useEffect(() => {
  auth.onAuthStateChanged(userAuth=>{
    if(!userAuth){
      //user is logged in
      dispatch(login({
        email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
      }))
    }else{
      //user is loggedd out
      dispatch(logout())
    }
  })
},[dispatch]);
  return (
    <div className="app ">
       <Header/>
       {!user ? (
        <Login/>
  ):(
        
      
       <div className='app_body'>
        <Sidebar/>
         <Feed />
       < Widgets/>
       </div>
       
      )}
    </div>
  );
}

export default App;
