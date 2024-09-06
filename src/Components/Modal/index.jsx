
import { useState, useEffect } from "react"
import { Container, Background } from "./styles"
import { getMovieVideos } from '../../Services/getData'

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideos(movieId))

        }

       getMovies()
    }, [])

    
    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <iframe src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title='youtube video player'
                        height='500px'
                        width='100%'
                    ></iframe>
                </Container>
            )}
        </Background>



    )
}
export default Modal