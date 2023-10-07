import React from 'react'

const Trusted = () => {
  return (
    <div className="bg-white mb-14">
    <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col md:flex-row items-center">
        <div className='flex-1' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1000"
     data-aos-offset="0">
        <h2 className=" text-3xl font-bold leading-8 text-gray-900">Trusted by over 2,000,000+ Web Developers</h2>
        <p className='font-semibold text-slate-500 my-5'>It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter.</p>

        </div>
      <div className="mx-auto flex-1 grid grid-cols-4 md:grid-cols-4 items-center justify-center gap-x-8 gap-y-5" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img className="col-span-2 max-h-12 w-full object-contain md:col-span-2" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"/>
        <img className="col-span-2 max-h-12 w-full object-contain md:col-span-2" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"/>
        <img className="col-span-2 max-h-12 w-full object-contain md:col-span-2" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"/>
        <img className="col-span-2 max-h-12 w-full object-contain  md:col-span-2" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"/>
        <img className="col-span-2 col-start-2 max-h-12 w-full object-contain md:col-span-4" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"/>
      </div>
    </div>
  </div>  
  )
}

export default Trusted