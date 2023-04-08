import { useState, useEffect } from "react";
import { supabase } from "./../client";
import Card from "../Components/Card";

const Gallery = () => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("Crew")
        .select()
        .order("created_at", { ascending: true });

      setCrew(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="page">
      <h1>Your Crewmate Gallery!</h1>
      {crew && crew.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          {crew.map((crewmate) => (
            <Card crewmate={crewmate} />
          ))}
        </div>
      ) : (
        <p>There are no crewmate</p>
      )}
    </div>
  );
};

export default Gallery;
