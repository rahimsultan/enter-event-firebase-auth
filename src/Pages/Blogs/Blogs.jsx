import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BlogCard from '../../Components/BlogCard.jsx/BlogCard'

const Blogs = () => {
    const blogs = useLoaderData()
  return (
    <div className='mt-24 mb-14 max-w-7xl mx-auto lg:px-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8'>
        {
            blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
        }
    </div>
  )
}

export default Blogs