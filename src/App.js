import styled from 'styled-components';
import PortfolioHomePage from './containers/PortfolioHomepage';

const Title = styled.h1`
  color: red;
  text-align: center;
`

const Paragraph = styled.p`
  text-align: center;
`

function App() {
  return (
    <>
    <div>
      <PortfolioHomePage />
      {/* <Title>Under construction</Title>
      <Paragraph>😎 Stay tuned! 😎</Paragraph> */}
    </div>
    </>
  );
}

export default App;
