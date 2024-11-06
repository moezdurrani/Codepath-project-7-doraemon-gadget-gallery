import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import suspect from "./../assets/light.png";

const Details = () => {
  const { id } = useParams();
  const [mate, setMate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      console.log("Fetching crewmate with id:", id);
      const { data, error } = await supabase
        .from("Crewmates")
        .select("name, speed, color")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching crewmate:", error);
        setError("Crewmate not found.");
      } else {
        console.log("Fetched crewmate data:", data); 
        setMate(data);
      }
      setLoading(false);
    };

    fetchCrewmate();
  }, [id]);

  console.log("Mate object:", mate); 

  if (loading) {
    return <p className="text-center text-white">Loading crewmate data...</p>;
  }

  if (error) {
    return (
      <div className="page text-center">
        <h1 className="text-4xl text-red-500">Crewmate Not Found</h1>
        <p className="text-xl my-3">
          The crewmate you are looking for does not exist or data is still loading.
        </p>
        <Link to="/gallery">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
            Back to Gallery
          </button>
        </Link>
      </div>
    );
  }

  if (!mate) {
    console.warn("Mate is still null after loading.");
    return (
      <div className="page text-center">
        <p className="text-xl text-red-500">Error: Crewmate data is missing.</p>
        <Link to="/gallery">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
            Back to Gallery
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page text-center text-white">
      <img src={suspect} alt="suspect" width="200" className="mx-auto my-5" />
      
      <h2 className="text-5xl my-3">Stats:</h2>

      <div className="text-3xl">
        <h1 className="mt-5 text-blue-500" style={{ fontSize: "48px" }}>Name: {mate.name}</h1>
        <p className="mt-5 text-green-500" style={{ fontSize: "35px" }}>Power: {mate.speed}</p>
        <p className="mt-5 text-orange-500" style={{ fontSize: "35px" }}>Color: {mate.color}</p>

        
        {mate.speed > 70 ? (
          <p className="mt-5 text-green-500">
            Wow, this Gadget is very powerful! {mate.speed} 🏃💨
          </p>
        ) : (
          <p className="mt-5 text-yellow-500">
            You may want a stronger Gadget; this one is a bit weak {mate.speed} 😬
          </p>
        )}
      </div>
      
      <Link to={`/${mate.id}/edit`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
          Want to edit this Gadget?
        </button>
      </Link>
    </div>
  );
};

export default Details;
