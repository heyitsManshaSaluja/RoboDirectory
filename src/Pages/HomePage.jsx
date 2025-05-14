import React from 'react';
import Navbar from '../Components/Navbar';

const HomePage = () => {
  return (
    <div><Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-[#B6B09F] to-black text-black p-8 flex flex-col items-center justify-center">
     
      <h1 className="text-6xl font-bold mb-4">Hey, Welcome to RoboLand!</h1>
      <p className="text-2xl mb-8">Feel free to find new Robo friends.</p>
      <div className="mt-8">
        <button className="bg-white text-blue-600 py-2 px-6 rounded-xl shadow-lg font-semibold hover:bg-gray-100 transition">Explore Now</button>
      </div>
    </div>
    </div>
  );
};

export default HomePage;