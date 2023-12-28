import { ChannelIMage, Component, ImageBanner, TextCard, TextContainer, Title, TitleCOntainer } from "./styles"


const VideoComponent = () => {
  return (
    <Component>
      <ImageBanner src="https://i.ytimg.com/vi/DXT9dF-WK-I/hq720.jpg" />
      <TitleCOntainer>
        <ChannelIMage>
          LP
        </ChannelIMage>
        <TextContainer>
          <Title title="[ESTUDE COMIGO 4 HORAS]4-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shinjuku, Tokyo">[ESTUDE COMIGO 4 HORAS]4-HOUR STUDY WITH ME🌦️ / calm piano / A Rainy Day in Shinjuku, Tokyo</Title>
          <TextCard>Abao in Tokyo</TextCard>
          <TextCard>6 mi de visualizações - há 1 ano</TextCard>
        </TextContainer>
      </TitleCOntainer>
    </Component>
  )
}

export default VideoComponent;