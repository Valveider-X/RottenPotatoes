import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

//genres

function Genres() {

const [genres, setGenres] = useState(null)
useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}/genres?key=${import.meta.env.VITE_API_KEY}`)
  .then((response)=>{
    setGenres(response.data.results)
  })
  .catch((error)=>{
    console.log(error)
  })
},[])

if (genres === null){
  return <PacmanLoader
  color={"yellow"}
  size={50}
  />
}
  

  return (
    <div>Genres
      {genres.map((genres, i)=>{
        return(
          <div key={i} >
            <Link to={"/genres"}>
              <div className="genres-card">
              <img src={genres.image_background} style={{height:"200px"}}/>
              <h3>{genres.name}</h3>
              </div>
            </Link>
            
          </div>
        )
      })}








    </div>
  )
}

export default Genres