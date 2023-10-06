import React from 'react'

const InputField = ({info}) => {
  return (
    <div>
    <label htmlFor="email" className="block text-sm font-medium leading-2 text-gray-900">
      {info.label}
    </label>
    <div className="mt-1 mb-4">
      <input
      placeholder={info.placeholder}
        name={info.name}
        type={info.type}
        required
        className="block w-full outline-none rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  )
}

export default InputField