import Crewmates from "./../assets/team.png";
import Ship from "./../assets/timeMachine.png";
import './GadgetHomePage.css';

const Home = () => {
  return (
    <div className="page text-center" style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Welcome to the Doraemon World!
      </h1>
      <p className="my-3" style={{ fontSize: '2rem' }}>
        Add new Gadgets to Doraemon's 4-Dimensional Pocket!
      </p>

      <div className="flex flex-col items-center">
        <img src={Crewmates} alt="crewmates" width="600" />
        <img src={Ship} alt="Ship" width="450" />
      </div>
    </div>
  );
};

export default Home;
