
import { updateProfile } from 'firebase/auth'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../../Components/InputField/InputField'
import useAuth from '../../Hooks/useAuth'

const Register = () => {
  const {createAccount, googleLogin, LogOut} = useAuth()
  const navigate = useNavigate()
  const [err, setErr] = useState('')

  const handeCreateAccount=(e)=>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const name = form.get('name')
    const password = form.get('password')
    const photo = form.get('photo')

    setErr('')

    if(password.length < 6){
      return setErr('password should be 6 character')
    }else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)){
      return setErr('special character missing')
    }else if(!/[A-Z]/.test(password)){
      return setErr('Please provide a Capital Letter')
    }

    createAccount(email, password)
    .then((res)=>{
      updateProfile(res.user, {
        displayName: name, photoURL: photo
      })
      .then(()=>{
        console.log('profile updated');
      }).catch(()=>{
        console.log('update error');
      })

      toast.success('Successfully Registered!')
      LogOut()
      navigate('/signin')
  
    })
    .catch(error =>{
      setErr(error.message);
    })
  }

  // google signup
  const handleGoogleLogin=()=>{
    setErr('')
    googleLogin()
    .then(()=>{
      toast.success('Successfully Registered!')
      navigate(location.state ? location.state : '/')
       
    })
    .catch(error =>{
      setErr(error.message)
    })
  }

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mt-10 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h1 className='text-2xl font-bold text-center'>Enter Event</h1>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handeCreateAccount} className="" action="#" method="POST">
        <InputField info={{name:'name', type:'text', label: 'Your Name', placeholder: "enter your name"}}/>
        <InputField info={{name:'photo', type:'text', label: 'Photo URL', placeholder: "enter your img url"}}/>
        <InputField info={{name:'email', type:'email', label: 'Email Address', placeholder: "enter your email"}}/>
        <InputField info={{name:'password', type:'text', label: 'Password', placeholder: "enter your password"}}/>
        <p className='-mt-3 mb-2 text-red-600 font-semibold text-sm'>{err}</p>

        <p className='text-sm font-semibold text-right -mt-2 mb-4'>Already have an account? <Link to={'/signin'} className='text-[15px] text-indigo-600'>Please Login</Link></p>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>
      <button
      onClick={handleGoogleLogin}
          type="button"
          className="relative mt-3 inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        >
          <span className="mr-2 inline-block">
            <svg
              className="h-6 w-6 text-rose-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
          </span>
          Sign up with Google
        </button>
    </div>
  </div>
  </>
  )
}

export default Register