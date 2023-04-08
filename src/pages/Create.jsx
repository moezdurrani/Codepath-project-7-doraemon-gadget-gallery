import { useState } from "react";
import { supabase } from "./../client";

import Crewmates from "./../assets/crewmates.43d07b24.png";

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

      <form
        id="createCrew"
        className="flex flex-col bg-gray-600 py-9 px-16 my-4 rounded-full">
        <label htmlFor="name" className="my-4 text-3xl font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="text-black p-1"
        />

        <label htmlFor="speed" className="my-4 text-3xl font-semibold">
          Speed (mph):
        </label>
        <input
          type="text"
          id="speed"
          name="speed"
          onChange={(e) => setSpeed(e.target.value)}
          className="text-black p-1"
        />

        <label htmlFor="color" className="my-4 text-3xl font-semibold">
          Color:
        </label>
        <select
          name="color"
          id="color"
          onChange={(e) => setColor(e.target.value)}
          className="text-black p-1">
          <option value="">Select A Color</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
          <option value="Yellow">Yellow</option>
          <option value="Orange">Orange</option>
          <option value="Pink">Pink</option>
          <option value="Rainbow">Rainbow</option>
        </select>

        <button
          className="bg-blue-900 my-6 h-10 rounded-lg transition hover:bg-blue-500 duration-500 w-fit px-3 mx-auto"
          onClick={createCrewmate}>
          Create Crewmate
        </button>
      </form>
    </div>
  );
};

export default Create;
