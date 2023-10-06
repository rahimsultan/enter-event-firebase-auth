
import { Link } from 'react-router-dom'
import InputField from '../../Components/InputField/InputField'
import useAuth from '../../Hooks/useAuth'

const Register = () => {
  const {createAccount} = useAuth()

  const handeCreateAccount=(e)=>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const name = form.get('name')
    const password = form.get('password')
    const photo = form.get('photo')

    if(password.length < 6){
      return alert('password should be 6 character')
    }else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)){
      return alert('special character missing')
    }else if(!/[A-Z]/.test(password)){
      return alert('Please provide a Capital Letter')
    }

    createAccount(email, password)
    .then(res=>{
      console.log(res.user);
    })
    .catch(error =>{
      console.log(error.message);
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
      <form onSubmit={handeCreateAccount} className="" action="#" method="POST">
        <InputField info={{name:'name', type:'text', label: 'Your Name', placeholder: "enter your name"}}/>
        <InputField info={{name:'photo', type:'text', label: 'Photo URL', placeholder: "enter your img url"}}/>
        <InputField info={{name:'email', type:'email', label: 'Email Address', placeholder: "enter your email"}}/>
        <InputField info={{name:'password', type:'text', label: 'Password', placeholder: "enter your password"}}/>

        <p className='text-sm font-semibold text-right -mt-2 mb-4'>Already have an account? <Link to={'/signin'} className='text-[15px] text-indigo-600'>Please Login</Link></p>

        <div className='flex items-center gap-3 mb-2'>
            <input type='checkbox'/>
            <p className=" text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Accept Term & Conditions</p>
        </div>

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

export default Register