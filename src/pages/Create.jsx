import { useState } from "react";
import { supabase } from "./../client";

import Crewmates from "./../assets/crewmates.43d07b24.png";
import Form from "../Components/Form";

const Create = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const createCrewmate = async (e) => {
    e.preventDefault();

    await supabase
      .from("Crew")
      .insert({
        Name: name,
        Speed: speed,
        Color: color,
      })
      .select();

    alert("Success");
    window.location = "/gallery";
  };

  return (
    <div className="page">
      <h1>Create a New Crewmate</h1>
      <img src={Crewmates} alt="crewmates" width="300" />

      <form id="createCrew">
        <Form setName={setName} setSpeed={setSpeed} setColor={setColor} />

        <button onClick={createCrewmate}>Create Crewmate</button>
      </form>
    </div>
  );
};

export default Create;
