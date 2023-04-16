import React from 'react'
import MovieCard from './MovieCard'
import Carousel from 'react-bootstrap/Carousel';
import AddMovie from './AddMovie';

function MovieList({movies , setmovies , text , rate}) {
  return (
    <div>
{/* button add movie */}
      <div className='addmovie'>
        <h5>you can also add you film just</h5>
        <AddMovie movies={movies} setmovies={setmovies}/>
      </div>

{/* affichage des movies filtrés en carousel*/}
      <div >
      <Carousel fade>
      {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el)=>
      <Carousel.Item>
        <div className='carousel'>  <img
          className="d-block w-100"
          src={el.posterurl}
          alt="movie"
        />
        <Carousel.Caption>
          <h2>{el.name}</h2>
          <h5>{el.description}</h5>
          <button className='btn-seetrailer' >See trailer</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      )}
    </Carousel>
      </div>

      {/* affichage des card movie filtré */}
      <div className='listmovie'>
      {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el)=>
      <MovieCard el={el}/>).reverse()}
      </div>
    </div>
  )
}

export default MovieList