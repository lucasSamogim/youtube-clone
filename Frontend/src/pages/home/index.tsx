import FilterMenu from "../../components/filterMenu";
import VideoComponent from "../../components/videoComponent";

import { Container } from "./styles";

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Container style={{gridTemplateColumns: '1fr'}}>
        <FilterMenu />
      </Container>
      <Container>
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
      </Container>
    </div>
  )
}

export default Home;