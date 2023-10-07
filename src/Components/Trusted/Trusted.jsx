import React from 'react'

const Trusted = () => {
  return (
    <div class="bg-white mb-14">
    <div class="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col md:flex-row items-center">
        <div className='flex-1'>
        <h2 class=" text-3xl font-bold leading-8 text-gray-900">Trusted by over 2,000,000+ Web Developers</h2>
        <p className='font-semibold text-slate-500 my-5'>It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter.</p>

        </div>
      <div class="mx-auto flex-1 grid grid-cols-4 md:grid-cols-4 items-center justify-center gap-x-8 gap-y-5">
        <img class="col-span-2 max-h-12 w-full object-contain md:col-span-2" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"/>
        <img class="col-span-2 max-h-12 w-full object-contain md:col-span-2" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"/>
        <img class="col-span-2 max-h-12 w-full object-contain md:col-span-2" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"/>
        <img class="col-span-2 max-h-12 w-full object-contain  md:col-span-2" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"/>
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain md:col-span-4" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"/>
      </div>
    </div>
  </div>  
  )
}

export default Trusted