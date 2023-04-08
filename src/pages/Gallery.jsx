import { useState, useEffect } from "react";
import { supabase } from "./../client";
import { Link } from "react-router-dom";

import Card from "../Components/Card";

const Gallery = (props) => {
  const {crew} = props;

  return (
    <div className="page">
      <h1>Your Crewmate Gallery!</h1>
      {crew && crew.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          {crew.map((crewmate) => (
            <Card key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          <p className="text-5xl text-slate-400">There are no crewmate</p>
          <button><Link to="/create">Create A Crewmate</Link></button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
