import { useLoaderData } from "react-router-dom";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
    const {createAccount}=useAuth()
    // console.log(createAccount);
    const events = useLoaderData()
    console.log(events);
  return (
    <div>
      <HomeBanner/>
      <div>
        <h2 className="text-center text-4xl font-bold mt-14">Our Services</h2>
      </div>
      <div className="max-w-7xl mx-auto lg:px-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 my-10">
        {
          events.map(event => <ServiceCard key={event.id} event={event}/>)
        }
      </div>
    </div>
  )
}

export default Home