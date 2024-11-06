import { useState } from "react";
import { supabase } from "../client";
import Crewmates from "./../assets/team.png";
import Form from "../Components/Form";
import './CreateGadget.css';


const Create = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const createCrewmate = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Crewmates")
      .insert({
        name: name,
        speed: parseInt(speed),
        color: color,
      })
      .select();

    if (error) {
      console.error("Error creating crewmate:", error);
      alert(`Failed to create crewmate: ${error.message || JSON.stringify(error)}`);
    } else {
      console.log("Created crewmate:", data);
      alert("Success");
      window.location = "/gallery";
    }
  };

  return (
    <div className="page">
      <h1>Create a New Gadget</h1>
      <img src={Crewmates} alt="crewmates" width="300" />

      <form id="createCrew">
        <Form setName={setName} setSpeed={setSpeed} setColor={setColor} />

        <button onClick={createCrewmate}>Create Gadget</button>
      </form>
    </div>
  );
};

export default Create;
