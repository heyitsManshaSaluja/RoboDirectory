import React from 'react'
import { useParams } from 'react-router-dom'
const Profile = () => {
    const { username } = useParams()
  return (
    <div>
       
     <p> {username}</p> 
     profile page
    </div>
  )
}

export default Profile
