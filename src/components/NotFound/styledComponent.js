import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #183b56;
`

export const Caption = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #5a7184;
`
export const Image = styled.img`
  width: 80%;
  max-width: 400px;
`
