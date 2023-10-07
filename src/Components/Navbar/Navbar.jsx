
import { Menu, X } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name:'Blogs',
    href:'/blogs'
  }
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const {user, LogOut, info} = useAuth()
  // logout function
  const handleLogout =()=>{
    LogOut()
    .then(()=>{
      toast.success('logout seccessfull');
    })
    .catch(error =>{
      toast.error(error.message);
    })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='absolute top-0 left-0 right-0 z-50'>
    <div className="relative w-full bg-black/30 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <img src="https://img.logoipsum.com/243.svg" alt="" />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className="text-sm font-semibold text-white hover:text-[#5D12D2]"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          {
            user ? 
            <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3'>
              <p>{info.username ? info.username : 'Adam'}</p>
              <div className='h-8 w-8 rounded-full overflow-hidden'>
              <img src={info.userphoto ? info.userphoto : 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'} alt="" />
              </div>
            </div>
            <button
            onClick={handleLogout}
              type="button"
              className="rounded-md bg-m px-3 py-2 bg-[#5D12D2] text-sm font-semibold text-white shadow-sm hover:bg-[#5D12D2]/80 "
            >
              Log Out
            </button>
            </div>
             : <Link to={'/signin'}>
              <button
              type="button"
              className="rounded-md bg-[#5D12D2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5D12D2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign in
            </button>
            </Link>
          }
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img src="https://img.logoipsum.com/243.svg" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-[#5D12D2]">
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <div>
                        {
                          user ? 
                          <button
                          onClick={handleLogout}
                            type="button"
                            className="rounded-md mt-2 bg-[#5D12D2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5D12D2]/80 "
                          >
                            Log Out
                          </button>
                           : <Link to={'/signin'}>
                            <button
                            type="button"
                            className="rounded-md mt-2 bg-[#5D12D2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5D12D2]/80 "
                          >
                            Sign in
                          </button>
                          </Link>
                        }
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}
