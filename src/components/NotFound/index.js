import {
  MainContainer,
  NotFoundContainer,
  Title,
  Caption,
  Image,
} from './styledComponent'

const NotFound = () => (
  <MainContainer>
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <Title>Page Not Found</Title>
      <Caption>We are sorry, the page you requested could not be found</Caption>
    </NotFoundContainer>
  </MainContainer>
)

export default NotFound
