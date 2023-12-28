import { 
  Container, 
  LogoContainer, 
  ButtonContainer, 
  ButtonIcon, 
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HeaderButton,
  LoginButton
} from "./styles";

import HamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/youtube-logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import DotMenuIcon from "../../assets/dot-menu.png";
import NoUserIcon from "../../assets/no-user-icon.png";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MenuContext } from "../../contexts/menuContext";
import { UserContext } from "../../contexts/userContext";


function Header() {

  const { login, logOut, user } = useContext(UserContext);

  const navigate = useNavigate();
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext);

  return (
    <Container>
      
      <LogoContainer>
        <ButtonContainer 
          margin='0 10px 0 0'
          onClick={() => setIsOpenMenu(!isOpenMenu)}  
        >
          <ButtonIcon alt="" src={HamburgerIcon} />
        </ButtonContainer>
        <img 
          style={{cursor: 'pointer', width: '100px'}}
          alt="YouTube Logo"
          src={Logo}
          onClick={() => navigate('/')}
        />
      </LogoContainer>

      <SearchContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Pesquisar" />
        </SearchInputContainer>
        <SearchButton>
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
        <ButtonContainer margin='0 0 0 10px'>
          <ButtonIcon alt="" src={MicIcon} />
        </ButtonContainer>
      </SearchContainer>

      <HeaderButton>

        {
          login
          ? ( 
              <div style={{display: 'flex', paddingLeft: '50px'}}>
                <ButtonContainer margin='0 0 0 10px'>
                  <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                
                <ButtonContainer margin='0 0 0 10px'>
                  <ButtonIcon alt="" src={NotificationIcon} />
                </ButtonContainer>
                
                <ButtonContainer margin='0 0 0 10px'>
                  {user.nome && user.nome[0].toUpperCase()}
                </ButtonContainer>

                <LoginButton onClick={() => logOut()}>
                  Logout
                </LoginButton>
              </div>
            )
          : (
              <div style={{display: 'flex', paddingLeft: '100px'}}>
                <ButtonContainer margin='0 0 0 10px'>
                  <ButtonIcon alt="" src={DotMenuIcon} />
                </ButtonContainer>
                <LoginButton onClick={() => navigate('/login')}>
                  <ButtonIcon alt="" src={NoUserIcon} />
                  Fazer login
                </LoginButton>
              </div>
            )
        }
        
      </HeaderButton>

    </Container>
  )
}

export default Header;