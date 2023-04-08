import Crewmates from "./../assets/crewmates.43d07b24.png";
import Ship from "./../assets/spaceship.3d8f767c.png";

const Home = () => {
  return (
    <div className="page text-white text-center">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p className="text-3xl my-3">Here is where you can create your very own set of crewmates before sending them off into space!</p>

      <div className="flex flex-col items-center">
        <img src={Crewmates} alt="crewmates" width="600"/>
        <img src={Ship} alt="Ship" width="600"/>
      </div>
    </div>
  )
}

export default Home