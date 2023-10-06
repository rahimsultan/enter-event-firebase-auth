import useAuth from "../../Hooks/useAuth";

const Home = () => {
    const {createAccount}=useAuth()
    console.log(createAccount);
  return (
    <div>Home</div>
  )
}

export default Home