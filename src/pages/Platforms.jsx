import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

function Platforms() {
  const [platforms, setPlatforms] = useState(null)
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/platforms?key=${import.meta.env.VITE_API_KEY}`)
    .then ((response)=>{
      setPlatforms(response.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  if(platforms === null){
    return <PacmanLoader
    color={"yellow"}
    size={50}
    />
  }



  return (
    <div>Platforms
      {platforms.map((platforms, i)=>{
        return(
          <div key={i}>
            <Link to={"/platforms/:games"}>
              <div className={"platforms"}>
                <img src={platforms.image_background} style={{height:"200px"}}/>
                <h3>{platforms.name}</h3>
              </div>


            </Link>



          </div> 
        )
      })}





    </div>
  )
}

export default Platforms