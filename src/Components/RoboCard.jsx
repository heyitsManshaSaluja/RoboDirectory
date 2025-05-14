import React from 'react'
import { useNavigate } from 'react-router-dom';

const RoboCard = React.memo(({ id, name, username, phone, email, website ,getData}) => {
  const navigate = useNavigate();
  function addrobo(){
   
    //getData((prevData) => [...prevData, addedRobo]);
    getData();
  }
  return (
    <div className="h-[300px] w-[250px] bg-slate-200 rounded-lg shadow-lg p-4 flex flex-col items-center justify-between hover:scale-105 transition-transform" onClick={() => navigate(`/robo/${id}`)}>
      <div className="h-[100px] w-[100px]">
        <img
          src={`https://robohash.org/${id}?set=set-4`}
          alt={`${name}'s robot`}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <button className="border border-black bg-red-200 text-bold px-4 py-2 rounded-lg hover:bg-red-300 transition-colors mt-2" onClick={addrobo}>
        Add friend
      </button>
      <div className="text-center mt-4">
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-600">@{username}</p>
        <div className="mt-2 text-sm text-gray-700">
          <p><span className="font-medium">Phone:</span> {phone}</p>
          <p><span className="font-medium">Email:</span> {email}</p>
          <p><span className="font-medium">Website:</span> {website}</p>
        </div>
      </div>
    </div>
  );
});

export default RoboCard;
