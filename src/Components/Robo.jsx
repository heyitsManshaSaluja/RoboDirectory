import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const DATA_URL = "https://jsonplaceholder.typicode.com/users";
const Robo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState(null);

    useEffect(() => {
        fetch(`${DATA_URL}/${id}`)
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {userData ? (
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
                    <img
                        src={`https://robohash.org/${userData.id}?size=200x200`}
                        alt="Robot Avatar"
                        className="w-32 h-32 mx-auto rounded-full mb-4"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{userData.name}</h1>
                    <p className="text-gray-600 mb-4">{userData.email}</p>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Go Back
                    </button>
                </div>
            ) : (
                <p className="text-gray-600 text-lg">Loading...</p>
            )}
        </div>
    );
}

export default Robo
