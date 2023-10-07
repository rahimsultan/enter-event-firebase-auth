import { useLoaderData } from "react-router-dom";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Team from "../../Components/Team/Team";
import Trusted from "../../Components/Trusted/Trusted";

const Home = () => {
    const events = useLoaderData()

  return (
    <div>
      <HomeBanner/>
      <div data-aos="zoom-in">
        <h2 className="text-center text-4xl font-bold mt-14">Our Services</h2>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="max-w-7xl mx-auto lg:px-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 my-10">
        {
          events.map(event => <ServiceCard key={event.id} event={event}/>)
        }
      </div>
      <div className="my-20" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <Team/>
      </div>
      <div>
        <Trusted/>
      </div>
    </div>
  )
}

export default Home