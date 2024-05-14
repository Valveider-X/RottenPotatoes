import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'


function PlatformsGames() {

  const params=useParams()
 // console.log(params);

  const[platformsGames, setPlatformsGames]=useState(null)
  useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}/games?platforms=${params.id}&key=${import.meta.env.VITE_API_KEY}`)
    .then((response)=>{
      setPlatformsGames(response.data.results)
      console.log(response.data.results);
    })

    .catch((error)=>{
      console.log(error);
    })

  },[])
  if(platformsGames===null){
    return <PacmanLoader
    color={"yellow"}
    size={50}
    />
  }
  return (
    <div>
      {platformsGames.map((games, i)=>{
        return(
          <div key={i}>
      <Link to={"/platforms/"+games.id}>
      <div className="game-card">
            <img src={games.background_image}
            style={{height: "100px"}}
            alt={"gameName" + games.name}/>
            <h3>{games.name}</h3>
            <h4>{games.released}</h4>
            <h4>{games.rating}</h4>
            
           

          </div>
      </Link>
 </div>

)


})}

    </div>
  )
}

export default PlatformsGames