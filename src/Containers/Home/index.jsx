import api from '../../Services/api'


function Home() {

  async function getMovies() {
    const data = await api.get('/movie/popular')

    console.log(data)
  }
  getMovies()


  return (
    <>
      <div>
        Hello world
      </div>
    </>
  )
}

export default Home