import styled from "styled-components"

export const Container = styled.div`
z-index: 99;
position: fixed;
top: 0;
min-height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
background-color:${ props => props.$chageBackground ? '#000' : 'transparent'};
transition: background-color 1s ease-in-out;

  img {
    width: 30%;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 50px;
  list-style: none;
  gap: 50px;
`

export const Li = styled.li`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`