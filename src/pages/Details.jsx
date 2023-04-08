import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import suspect from "./../assets/suspect.bdfacc7e.png"

const Details = (props) => {
  const { crew } = props;

  const { id } = useParams();
  const mate = crew.filter((item) => item.id == id)[0];

  return (
    <div className="page">
      <h1>Crewmate: {mate.Name}</h1>
      <h2 className="text-5xl my-3">Stats:</h2>
      <div className="text-3xl">
        <p className="my-3">Color: {mate.Color}</p>
        <p>Speed: {mate.Speed} mph</p>
        {mate.Speed > 70 ? (
          <p className="mt-20">
            Wow, this Crewmate is super fast, that will be helpful! 🏃💨
          </p>
        ) : (
          <p className="mt-20">
            You may want to find a Crewmate with more speed, this one is kind of
            slow 😬
          </p>
        )}
      </div>
      <Link to={`/${mate.id}/edit`}>
        <button>Want to edit this crewmate?</button>
      </Link>

      <img src={suspect} alt="suspect" width="200"/>
    </div>
  );
};

export default Details;
