
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import Button from '../../Components/Button'
import Slider from '../../Components/Slider'
import { getImages } from '../../Services/Utils/getImages'
import Modal from '../../Components/Modal'
import { getMovies, getPopularPerson, getPopularSeries, getTopMovies, getTopSeries } from '../../Services/getData'


function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSerie, setTopSerie] = useState()
  const [PopularSerie, setPopularSerie] = useState()
  const [PopularPerson, setPopularPerson] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {

      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPerson()
      ])
        .then(([movie, topMovies, topSeries, popularSeries, popularPerson]) => {
          setMovie(movie)
          setTopMovie(topMovies)
          setTopSerie(topSeries)
          setPopularSerie(popularSeries)
          setPopularPerson(popularPerson)
        })
        .catch((error) => console.error(error))
    }

    getAllData()

  }, [])


  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}> Assista agora</Button>
                <Button onClick={() => setShowModal(true)}> Assista o trailler</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={getImages(movie.poster_path)}
                alt='capa do filme' />
            </Poster>
          </Container>
        </Background>
      )}{topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
      
      {topSerie && <Slider info={topSerie} title={'Top Series'} />}
      {PopularSerie && <Slider info={PopularSerie} title={'Popular Series'} />}
      {PopularPerson && <Slider info={PopularPerson} title={'Artistas Populares'} />}
    </>
  )
}

export default Home

//https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg