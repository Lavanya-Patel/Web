import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/Firebase"

const Account = () => {
  const [email ,setemail]=useState("")
  const [password , setpassword]=useState("")
  const handlesubmit=(e)=>{
      e.preventDefault()
      console.log(email,password)
      createUserWithEmailAndPassword(auth ,email,password)
      .then((res)=>{
          console.log(res)
          alert("Account Created ...")
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  const handlesignin=(e)=>{
    e.preventDefault()
    console.log(email,password)
    signInWithEmailAndPassword(auth ,email,password)
    .then((res)=>{
        console.log(res)
        alert("You'r Login😎")
    })
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div>
      <Navbar />
      <div className='account d-flex row container'>
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <p>Please create a new account to explore this experience.</p>
        <div className=' Login col-6'>
          <h1>Login</h1>
          <p>If you have an account, please sign in with your email address.</p>
          <h5>Email</h5>
          <input type="email" onChange={(e)=>setemail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} />
          <div>
            <button onClick={handlesignin}>Sign In</button>
          </div>
          <small>Forgot your password?</small>
        </div>
   <div className=' Login col-6'>
          <h1>Create Customer</h1>
          <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
          <h5>First Name</h5>
          <input type="text" />
          <h5>LastName</h5>
          <input type="text" />
          <h5>Email</h5>
          <input type="email" onChange={(e)=>setemail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} />
          <div className='check'>
            <input type="checkbox" />
            <p>Subscribe to our newsletter.</p>
            <button onClick={handlesubmit}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Account
