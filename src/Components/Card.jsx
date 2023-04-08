import outline from "./../assets/ce385016.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { crewmate } = props;

  return (
    <div className="bg-gray-500 px-7 py-4 m-7 text-2xl">
      <Link to={`/${crewmate.id}`}>
        <div className="space-y-3">
          <img src={outline} alt="outline" width="200" className="mx-auto" />
          <p>Name of Crewmate: {crewmate.Name}</p>
          <p>Speed of Crewmate: {crewmate.Speed}</p>
          <p>Color of Crewmate: {crewmate.Color}</p>
        </div>
      </Link>

      <button className="my-6">
        <Link to={`/${crewmate.id}/edit`}>Edit Crewmate</Link>
      </button>
    </div>
  );
};

export default Card;
