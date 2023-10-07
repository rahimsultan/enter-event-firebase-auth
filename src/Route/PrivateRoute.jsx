import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'
import useAuth from '../Hooks/useAuth'


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()


    if(loading){
      return  <div className='h-[50vh] flex justify-center items-center'>
            <FadeLoader color="#36d7b7" />
        </div>
    }
    if(user){
        return children
    }
  return <Navigate state={location.pathname} to={'/signin'}/>
}

export default PrivateRoute