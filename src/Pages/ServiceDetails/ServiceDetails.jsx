import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams()
    const events = useLoaderData()
    const [service, setService] = useState({})

    useEffect(()=>{
      const item = events.find(event=> event.id === Number(id))
      setService(item)
    },[])


  return (
    <div className='max-w-7xl mx-auto lg:px-8 px-4 mt-32'>
      <div className='w-full h-[700px] rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={service.img} alt="" />
      </div>
      <div className='mb-10'>
        <h2 className='text-4xl font-bold my-5'>{service.title}</h2>
        <p className='text-lg'>{service.description}</p>
      </div>
    </div>
  )
}

export default ServiceDetails