import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  background-color: #152850;
`

export const ResponsiveContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const Logo = styled.img`
  width: 100px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: transparent;
  padding: 10px;
  padding-inline: 20px;
  border: 1px solid #ffffff;
  outline: none;
  cursor: pointer;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const HomeTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
`

export const HomeImage = styled.img`
  width: 80%;
  max-width: 400px;
`
