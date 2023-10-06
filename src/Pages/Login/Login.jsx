
import { Link } from 'react-router-dom'
import InputField from '../../Components/InputField/InputField'
import useAuth from '../../Hooks/useAuth'

const Login = () => {
  const {LogIn} = useAuth()

  const handeLoginAccount=(e)=>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    LogIn(email, password)
    .then(res=>{
      console.log(res.user);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handeLoginAccount} className="" action="#" method="POST">
        <InputField info={{name:'email', type:'email', label: 'Email Address', placeholder: "enter your email"}}/>
        <InputField info={{name:'password', type:'text', label: 'Password', placeholder: "enter your password"}}/>

        <p className='text-sm font-semibold text-right -mt-2 mb-4'>Don't have an account? <Link to={'/signup'} className='text-[15px] text-indigo-600'>Create A New One</Link></p>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
        
      </form>
    </div>
  </div>
  </>
  )
}

export default Login