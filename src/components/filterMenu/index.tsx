import { Container, Item } from "./styles";
import HorizontalScroll from "react-scroll-horizontal";

const FilterMenu = () => {

  const filterItems = ["Tudo", "Ao vivo", "Música", "Jogos", "Downtempo", "React", "Smooth Jazz", "Música instrumental", "HTML5", "House Music", "iPhone", "Piano", "Computadores", "Counter-Strike: Global Offensive", "Música brasileira", "Samsung", "Concursos públicos", "Enviados recentemente", "Assistidos", "Novidades para você"];

  return (
    <Container>
      <HorizontalScroll className="scroll" reverseScroll={true}>
        {
          filterItems.map((item, index) => (
            <Item key={index} title={item}>
              <span>{item}</span>
            </Item>
          ))
        }
      </HorizontalScroll>
    </Container>
  )
}

export default FilterMenu;