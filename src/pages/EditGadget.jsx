import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const Edit = ({ crew }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState({
    name: "",
    speed: "",
    color: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCrewmate = crew.find((mate) => mate.id === parseInt(id));
    if (foundCrewmate) {
      setCrewmate(foundCrewmate);
      setLoading(false);
    } else {
      const fetchCrewmate = async () => {
        const { data, error } = await supabase
          .from("Crewmates")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching crewmate:", error);
        } else {
          setCrewmate(data);
        }
        setLoading(false);
      };
      fetchCrewmate();
    }
  }, [crew, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrewmate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateInfo = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("Crewmates")
      .update({
        name: crewmate.name,
        speed: parseInt(crewmate.speed),
        color: crewmate.color,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating crewmate:", error);
      alert("Failed to update crewmate.");
    } else {
      alert("Update successful!");
      navigate("/gallery");
    }
  };

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="page">
      <h1>Edit {crewmate.name}</h1>
      <form onSubmit={updateInfo}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={crewmate.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Power:
          <input
            type="number"
            name="speed"
            value={crewmate.speed}
            onChange={handleChange}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={crewmate.color}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Crewmate</button>
      </form>
    </div>
  );
};

export default Edit;
