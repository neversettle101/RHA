import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import React, { useEffect, useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
      signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname="/login";
      })
  }
  return <Router>
    <nav>
      <Link to="/"> Home </Link>
      
      { !isAuth ? (
         <Link to="/login"> Login </Link>
        ) : (
          <>
          <Link to="/create"> Create Post</Link>
          <button> Log out</button> 
          </>
        )}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<CreatePost isAuth={isAuth}/>} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
    </Routes>
  </Router>
}

export default App;