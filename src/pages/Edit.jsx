import { useState } from "react";
import { supabase } from "./../client";
import { useParams } from "react-router-dom";

import Form from "./../Components/Form";
import Crewmates from "./../assets/crewmates.43d07b24.png";

const Edit = (props) => {
  const { crew } = props;
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const { id } = useParams();
  const mate = crew.filter((item) => item.id == id)[0];

  const updateInfo = async (e) => {
    e.preventDefault();

    await supabase
      .from("Crew")
      .update({
        Name: name,
        Speed: speed,
        Color: color,
      })
      .eq("id", id);

    alert("Success");
    window.location = "/gallery";
  };

  const deleteCrewmate = async (e) => {
    e.preventDefault();

    await supabase.from("Crew").delete().eq("id", id);

    alert("Success");
    window.location = "/gallery";
  };

  return (
    <div className="page">
      <h1>Update Your Crewmate :)</h1>
      <img src={Crewmates} alt="crewmates" width="300" />
      <p className="text-4xl my-3">Current Crewmate Info:</p>
      <p className="text-lg">
        Name: {mate.Name}, Speed: {mate.Speed}, Color: {mate.Color}
      </p>
      <form>
        <Form setName={setName} setSpeed={setSpeed} setColor={setColor} />

        <button onClick={updateInfo}>Update Crewmate</button>
      </form>
      <button className="bg-red-700 hover:bg-red-400" onClick={deleteCrewmate}>
        Delete Crewmate
      </button>
    </div>
  );
};

export default Edit;
