import { useState } from 'react'
import Logo from '../../assets/logo (1).png'
import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom'


function Header() {
    const [changeBackground, setChangeBackground] = useState("false")
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!changeBackground && window.scrollY > 150) {
            setChangeBackground(true)
        }
        if (changeBackground && window.scrollY <= 150) {
            setChangeBackground(false)
        }

    }

    return (
        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt='imagem da logo' />
            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filme</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header