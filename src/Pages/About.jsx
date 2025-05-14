import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-800 p-8 relative flex items-center justify-center">
        {/* Collage Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.pinimg.com/736x/97/c3/45/97c345e877738386ae5ab035a4a985a1.jpg'), 
                               url('https://i.pinimg.com/736x/be/25/62/be25621d2c50b0012f5da118d332c06e.jpg'),
                               
                               url('https://i.pinimg.com/736x/75/8a/2e/758a2e6696cb8960efac2a3cc183c3fb.jpg'), 
                               url('https://i.pinimg.com/736x/54/60/ad/5460ada715c004353e94e2d2e501d4a1.jpg')`,
            backgroundPosition: 'top left, top right, bottom left, bottom right',
            backgroundSize: '30% 45%',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
            
          }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-4xl  text-center ">
          <h2 className="text-4xl font-bold mb-6 ">About RoboLand</h2>
          <p className="text-lg mb-8 font-bold ">RoboLand is a comprehensive directory showcasing the most advanced and fascinating robots from around the world. Our mission is to provide enthusiasts and professionals with a vibrant space to explore and discover new robotic companions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p>To create a dynamic community that embraces the future of robotics and innovation.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p>To inspire and educate through an engaging platform dedicated to robotic advancements.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
              <p>We are a passionate group of robotics enthusiasts, engineers, and designers committed to bringing you the best in robotic technology.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Smart Robots</h3>
              <p>We present a vast variety of robots, you can choose them as per your choice.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
