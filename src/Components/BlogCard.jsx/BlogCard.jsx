import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className="border">
        <img src={blog.img} className="aspect-video w-full rounded-md" alt=""/>
    <div className="min-h-min p-3">
    <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">#Design</p>
    <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{blog.title}</p>
    <p className="mt-4 w-full text-sm leading-normal text-gray-600">{blog.description}</p>
    <div className="mt-4 flex space-x-3 ">
        <img className="h-full w-10 rounded-lg" src={blog.thumbnail} alt="Emily Lee"/>
    <div>
    <p className="text-sm font-semibold leading-tight text-gray-900">{blog.name}</p>
    <p className="text-sm leading-tight text-gray-600">{blog.date}</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default BlogCard