import { useEffect, useState } from "react"
import { getImages } from '../../Services/Utils/getImages'
import { Container } from "./styles"
import api from "../../Services/api"




function Series() {
  const [Serie, setSeries] = useState()


  useEffect(() => {
    async function getSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setSeries(results)

    }

    getSeries()

  }, [])


  return (
    <>
      {Serie && Serie.map((item, index) => (
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

export default Series