import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({event}) => {
  return (
    <div className="rounded-md border">
    <img
      src={event.img}
      alt="Laptop"
      className="h-[200px] w-full rounded-t-md object-cover"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        {event.title}
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        {event.description.length < 80 ? event.description : event.description.slice(0, 80) + '...'}
      </p>
      <div className="mt-4">
        <span className="mb-2 mr-4 inline-block text-xl font-semibold text-gray-900">
         Price: ${event.price}
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #entertainment
        </span>
      </div>
      <Link to={`/service/${event.id}`}>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        See Details
      </button>
      </Link>
    </div>
  </div>
  
  )
}

export default ServiceCard