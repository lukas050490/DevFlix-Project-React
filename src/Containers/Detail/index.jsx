
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getImages } from "../../Services/Utils/getImages"
import { getMovieById, getMovieSimilar, getMovieVideos, getMovieCredits } from "../../Services/getData"

import { Container, Background, Cover, Info, ContainerMovies } from "./styles"
import SpanGenres from "../../Components/SpanGenres"
import Credits from "../../Components/Credits"
import Slider from "../../Components/Slider"


function Detail({ }) {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {

      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {

          setMovie(movie)
          setMovieVideos(videos)
          setMovieCredits(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }

    getAllData()

  }, [])


  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{movie.name}</h4>
                  <iframe src={`https://www.youtube.com/embed/${video.key}`}
                    title='youtube video player'
                    height='500px'
                    width='100%'
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (<Slider info={movieSimilar} title={'Filmes similares'} />)}
        </>
      )}
    </>

  )
}
export default Detail