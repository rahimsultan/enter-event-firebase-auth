import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config"

export const authContext = createContext()


// component
const AuthProvider = ({children}) => {
  // for use state
  const [user, setUser]=useState(null)

    const createAccount=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login Account
    const LogIn = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }

    // set user
    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (currentuser)=>{
      console.log(currentuser);
        setUser(currentuser)
      })
      return ()=>{
        unSubscribe()
      }
    },[])

    // signOut user 
    const LogOut =()=>{
     return signOut(auth)
    }






const authentications ={createAccount, LogIn, user, LogOut}
  return (
    <authContext.Provider value={authentications}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider