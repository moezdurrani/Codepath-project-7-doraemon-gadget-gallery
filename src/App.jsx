import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import { supabase } from "./client";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import Details from "./pages/Details";
import Edit from "./pages/Edit";

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
        <Route path="/:id">
          <Route index element={<Details crew={crew} />} />
          <Route
            path="edit"
            element={
              crew && crew.length > 0 ? <Edit crew={crew} /> : <p>sorry</p>
            }
          />
        </Route>
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
