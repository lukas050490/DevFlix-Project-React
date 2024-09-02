import Logo from '../../assets/logo (1).png'
import { Container, Menu, Li} from './styles'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <Container>
            <img src={Logo} alt='imagem da logo'/>
            <Menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/filmes">Filme</Link>
                </Li>
                <Li>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header