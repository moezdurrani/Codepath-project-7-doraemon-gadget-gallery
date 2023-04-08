import outline from "./../assets/ce385016.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { crewmate } = props;

  return (
    <div className="bg-gray-500 px-7 py-4 m-7 text-2xl rounded-2xl">
      <Link to={`/${crewmate.id}`}>
        <div className="space-y-3">
          <img src={outline} alt="outline" width="200" className="mx-auto" />
          <p>Name of Crewmate: <span>{crewmate.Name}</span></p>
          <p>Speed of Crewmate: <span>{crewmate.Speed} mph</span></p>
          <p>Color of Crewmate: <span>{crewmate.Color}</span></p>
        </div>
      </Link>

      <button className="my-6">
        <Link to={`/${crewmate.id}/edit`}>Edit Crewmate</Link>
      </button>
    </div>
  );
};

export default Card;
