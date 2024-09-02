import styled from "styled-components"

export const Container = styled.div`
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;

  img{
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

  a {
    text-decoration: none;
    color: #ffffff;
  }
`