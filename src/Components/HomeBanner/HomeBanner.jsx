
const HomeBanner = () => {
  return (
    <div className="w-full h-screen" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
        <div className="relative">
            <img className="w-full h-screen object-cover" src="https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
            <div className="absolute bg-black/60 inset-0 flex justify-center text-center items-center">
                <div className="max-w-7xl lg:px-8 px-4 mx-auto text-white">
                <h1 className="text-white font-bold text-7xl mb-6">Concerts and Music Festivals</h1>
                <p className="max-w-4xl mx-auto">Join us for an unforgettable night of live music at our Concerts and Music Festivals event. Experience the magic of your favorite artists as they take the stage and rock the night away. Whether you're a fan of rock, pop, or jazz, we've got something for everyone. Get ready to dance, sing, and make memories that will last a lifetime. Don't miss out!</p>
                <button className="rounded-md mt-5 bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500/80 ">Book Now</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeBanner