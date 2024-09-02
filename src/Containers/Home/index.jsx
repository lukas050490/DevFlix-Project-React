import api from '../../Services/api'
import { useState, useEffect } from 'react'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import Button from '../../Components/Button'
import Slider from '../../Components/Slider'
import { getImages } from '../../Services/Utils/getImages'


function Home() {
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSerie, setTopSerie] = useState()
  const [PopularSerie, setPopularSerie] = useState()
  const [PopularPerson, setPopularPerson] = useState()

  useEffect(() => {
    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular')

      setMovie(results[0])
    }


    async function getTopMovies() {
      const { data: { results } } = await api.get('/movie/top_rated')

      console.log(results)
      setTopMovie(results)
    }

    async function getTopSeries() {
      const { data: { results } } = await api.get('/tv/top_rated')

      console.log(results)
      setTopSerie(results)
    }

    async function getPopularSeries() {
      const { data: { results } } = await api.get('/tv/popular')

      console.log(results)
      setPopularSerie(results)
    }

    async function getPopularPerson() {
      const { data: { results } } = await api.get('/person/popular')

      console.log(results)
      setPopularPerson(results)
    }


    getMovies()
    getTopMovies()
    getTopSeries()
    getPopularSeries()
    getPopularPerson()

  }, [])


  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red> Assista agora</Button>
                <Button> Assista o trailler</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={getImages(movie.poster_path)}
                alt='capa do filme' />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={'Top Filmes'}/>}
      {topSerie && <Slider info={topSerie} title={'Top Series'}/>}
      {PopularSerie && <Slider info={PopularSerie} title={'Popular Series'}/>}
      {PopularPerson && <Slider info={PopularPerson} title={'Artistas Populares'}/>}
    </>
  )
}

export default Home

//https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg