import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import { supabase } from "./client";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/GadgetHomePage";
import Create from "./pages/CreateGadget";
import Gallery from "./pages/GadgetGallery";
import Details from "./pages/GadgetDetails";
import Edit from "./pages/EditGadget";
import './App.css';

function App() {
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
    <div className="min-h-screen overflow-x-hidden bg-gray-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery crew={crew} />} />
        <Route path="/:id" element={<Details crew={crew} />} />
        <Route path="/:id/edit" element={<Edit crew={crew} />} /> 

        <Route
          path="*"
          element={
            <p className="text-white text-center text-4xl mt-10">
              404 Page Not Found
            </p>
          }
        />
      </Routes>
    </div>
  );
}

export default App;