import { useEffect, useState } from "react"
import { getImages } from '../../Services/Utils/getImages'
import { Container } from "./styles"
import api from "../../Services/api"




function Movies() {
  const [Movie, setMovies] = useState()


  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovies(results)

    }

    getMovies()

  }, [])


  return (
    <>
      {Movie && Movie.map((item, index) => (
        <Container key={index}>
          <div>
            <img src={getImages(item.poster_path || item.profile_path || '')} />
            <h3>{item.title || item.name}</h3>
          </div>
        </Container>
      ))}
    </>
  )
}

export default Movies