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

export const LoginCard = styled.div`
  background-color: #e0eefe;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  height: 75vh;
  margin: auto;
`

export const LoginImage = styled.img`
  width: 55%;
  margin: auto;
`

export const FormCard = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
`

export const FormTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 32px;
  color: #152850;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #1565d8;
  padding: 10px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #ff0b37;
  text-align: center;
  margin-top: 5px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: #183b56;
  margin-bottom: 12px;
`

export const UserInput = styled.input`
  width: 100%;
  font-family: 'Roboto';
  font-size: 14px;
  color: #5a7184;
  height: 40px;
  outline: none;
  border: 1px solid #c3cad9;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 25px;
`
