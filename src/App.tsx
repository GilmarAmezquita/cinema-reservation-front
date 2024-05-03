import { useState } from "react";
import Header from "./layout/Header"
import ImageCarousel from "./pages/home/Movies"
import { MovieType } from "./types/MovieType";

function App() {
  const pages = ['Cartelera', 'Proximamente', 'Contacto'];
  const [actualPage, setActualPage] = useState(pages[0]);
  const [movie, setMovie] = useState<MovieType>();

  return (
    <>
      <Header pages={pages} setActualPage={setActualPage}/>
      {actualPage === 'Cartelera' && <ImageCarousel setMovie={setMovie}/>}
      {movie && <div>{movie.name}</div>}
    </>
  )
}

export default App
