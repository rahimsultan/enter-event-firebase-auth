import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config"

export const authContext = createContext()


// component
const AuthProvider = ({children}) => {
  // for use state
  const [user, setUser]=useState(null)
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})
  const googleProvider = new GoogleAuthProvider()

    const createAccount=(email, password)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // create user with google
    const googleLogin=()=>{
     return signInWithPopup(auth, googleProvider)
    }

    // Login Account
    const LogIn = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // set user
    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (currentuser)=>{
      console.log(currentuser);
      setUser(currentuser)
      setInfo({username: currentuser?.displayName, userphoto: currentuser?.photoURL})
      setLoading(false)
      })
      return ()=>{
        unSubscribe()
      }
    },[user])

    // signOut user 
    const LogOut =()=>{
     return signOut(auth)
    }

const authentications ={createAccount, LogIn, user, LogOut, loading, googleLogin, info}
  return (
    <authContext.Provider value={authentications}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider