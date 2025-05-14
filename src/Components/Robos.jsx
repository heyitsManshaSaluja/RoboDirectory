import React, { useState, useEffect, useMemo, useCallback } from 'react';
import RoboCard from './RoboCard';
import { useNavigate } from 'react-router-dom';

// Glittering shimmer screen component
const GlitterShimmer = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Moving glitter effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glitter" />
      {/* Centered loading text */}
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-4xl font-bold">Loading Robots...</h1>
      </div>
    </div>
  );
};

const DATA_URL = "https://jsonplaceholder.typicode.com/users";

const Robos = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");


  const filtered=useMemo(() => {
     const fnew = data?.filter((robot) =>
      robot?.name?.toLowerCase()?.includes(value?.toLowerCase())
    );
    return fnew;
  }, [value, data]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(DATA_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);
 const getData=useCallback(async() => {
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
 }, []);
  useEffect(() => {
    
    getData();
  }, []);

  if (!data) return <GlitterShimmer />;

return (
  <div className="min-h-screen bg-black p-6">
    <h1 className="text-3xl font-bold text-center mb-8 text-white">Robot Directory</h1>
    <div className="flex flex-row items-center justify-center mb-8 space-x-4">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition"
      >
        Back
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search robots..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered?.length === 0 && (
        <p className="text-center mt-10 text-gray-400">No robots found</p>
      )}
      {filtered?.map((robot) => (
        <RoboCard
          key={robot.id}
          id={robot.id}
          name={robot.name}
          username={robot.username}
          phone={robot.phone}
          email={robot.email}
          website={robot.website}
          getData={getData}
        />
      ))}
    </div>
  </div>
);
};

export default Robos;