import React, { useEffect, useState } from "react"
import SocialCard from "./SocialCard"
import './FetchAPI.css'

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="cards_container">
        <button onClick={fetchData} className="button">Fetch Random</button>
        {users.map(user => (
         <SocialCard key={user.id} userData={user}></SocialCard>
        ))}
    </div>
  )
}

export default UsingFetch
