import { useState, CSSProperties } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
//* Import Páginas.
import Home from "./pages/Home";
import Platforms from "./pages/Platforms";
import PlatformsGames from "./pages/PlatformsGames";
import Genres from "./pages/Genres";
import GenresGames from "./pages/GenresGames";
import GamesList from "./pages/GamesList";
import GameDetails from "./pages/GameDetails";
import GameReviews from "./pages/GameReviews";
import GameCompletion from "./pages/GameCompletion";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
//* Import Componentes
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";



import "./App.css";




function App() {

 


  //useState para pasar como props
/*  const [gamesList, setGamesList] = useState(null)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/games?key=${import.meta.env.VITE_API_KEY}`)
    .then((response)=>{
      //console.log(response)
      props.setGamesList(response.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])*/

  return (



    
    <>
 
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home /*gamesList={gamesList} setGamesList={setGamesList}*//>} />
        <Route path="/platforms" element={<Platforms/>} />
        <Route path="/platforms/:id" element={<PlatformsGames />} />
        <Route path="/genres/" element={<Genres />} />
        <Route path="/genres/:id" element={<GenresGames />} />
        <Route path="/games" element={<GamesList />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/game-reviews/:id" element={<GameReviews />} />
        <Route path="/game-completion/:id" element={<GameCompletion />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
