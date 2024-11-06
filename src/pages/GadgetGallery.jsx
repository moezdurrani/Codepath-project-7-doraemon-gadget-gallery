import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../Components/Card";

const Gallery = () => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchCrew = async () => {
      const { data, error } = await supabase
        .from("Crewmates")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) console.error("Error fetching crewmates:", error);
      else setCrew(data);
    };
    fetchCrew();
  }, []);

  const handleDelete = (id) => {
    setCrew((prevCrew) => prevCrew.filter((crewmate) => crewmate.id !== id));
  };

  return (
    <div className="page">
      <h1>Your Gadget Gallery!</h1>
      {crew && crew.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          {crew.map((crewmate) => (
            <Card key={crewmate.id} crewmate={crewmate} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p className="text-5xl text-slate-400">There are no gadgets</p>
      )}
    </div>
  );
};

export default Gallery;