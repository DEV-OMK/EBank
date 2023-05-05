import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainContainer,
  ResponsiveContainer,
  Navbar,
  Logo,
  LogoutButton,
  HomeContainer,
  HomeTitle,
  HomeImage,
} from './styledComponent'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const Header = () => (
    <Navbar>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <LogoutButton type="button" onClick={onClickLogout}>
        Logout
      </LogoutButton>
    </Navbar>
  )

  const HomeContent = () => (
    <HomeContainer>
      <HomeTitle>Your Flexibility, Our Excellence</HomeTitle>
      <HomeImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </HomeContainer>
  )

  return (
    <MainContainer>
      <ResponsiveContainer>
        <Header />
        <HomeContent />
      </ResponsiveContainer>
    </MainContainer>
  )
}

export default withRouter(Home)
