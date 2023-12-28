import { 
  ButtonIcon,
  Container, 
  MenuItem,
  Divider,
  OpenMenuSectionTitle,
  AvatarContainer,
  ImgContainer,
  NameContainer,
  AvatarImg,
  AvatarName,
  FooterLinks,
  FooterDivider,
  FooterCopyright,
} from "./styles";

import HomeIcon from "../../assets/house.png";
import ShortIcon from "../../assets/shorts.png";
import SubIcon from "../../assets/subscribe.png";
import LibIcon from "../../assets/biblioteca.png";
import HistIcon from "../../assets/historico.png";
import MyVideosIcon from "../../assets/myvideos.png";
import LaterIcon from "../../assets/later.png";
import LikeIcon from "../../assets/like.png";
import UserImg1 from "../../assets/userImg1.png";
import FireIcon from "../../assets/fire.png";
import ShopIcon from "../../assets/shopping.png";
import MusicIcon from "../../assets/music.png";
import MovieIcon from "../../assets/movie.png";
import LiveIcon from "../../assets/live.png";
import GameIcon from "../../assets/game.png";
import NewsIcon from "../../assets/news.png";
import SportIcon from "../../assets/sports.png";
import LearnIcon from "../../assets/learn.png";
import YoutubeIcon from "../../assets/youtube.png";
import YoutubeStudioIcon from "../../assets/youtube-studio.png";
import YoutubeMusicIcon from "../../assets/youtube-music.png";
import YoutubeKidsIcon from "../../assets/youtube-kids.png";
import ConfigIcon from "../../assets/config.png";
import FlagIcon from "../../assets/flag.png";
import HelpIcon from "../../assets/help.png";
import FeedbackIcon from "../../assets/feedback.png";

import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";

const users = [
  {
    name: "Lucas Samogim Pereira",
    image: UserImg1,
  },
  {
    name: "Ketut Subiyanto",
    image: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg",
  },
  {
    name: "Hank Buster Ty Morton",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Custódio Carver Sully Bobbie",
    image: "https://images.pexels.com/photos/7745573/pexels-photo-7745573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Janiyah Marina Nerea Diana",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Drousilla Jacey Vera",
    image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Isaac Alexandre Afonso",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const closeMenuItems = [
  {
    title: "Início",
    icon: HomeIcon,
    link: "/",
  },
  {
    title: "Shorts",
    icon: ShortIcon,
    link: "/shorts",
  },
  {
    title: "Inscrição",
    icon: SubIcon,
    link: "/subscriptions",
  },
  {
    title: "Biblioteca",
    icon: LibIcon,
    link: "/library",
  },
];

const openMenuItemsFirstGroup = [
  {
    title: "Início",
    icon: HomeIcon,
    link: "/",
  },
  {
    title: "Shorts",
    icon: ShortIcon,
    link: "/shorts",
  },
  {
    title: "Inscrição",
    icon: SubIcon,
    link: "/subscriptions",
  },
];

const openMenuItemsSecondGroup = [
  {
    title: "Biblioteca",
    icon: LibIcon,
    link: "/library",
  },
  {
    title: "Histórico",
    icon: HistIcon,
    link: "/history",
  },
  {
    title: "Seus vídeos",
    icon: MyVideosIcon,
    link: "/myvideos",
  },
  {
    title: "Assistir mais tarde",
    icon: LaterIcon,
    link: "/later",
  },
  {
    title: "Vídeos marcados com 'Gostei'",
    icon: LikeIcon,
    link: "/liked",
  },
];

const openMenuExplorerGroup = [
  {
    title: "Em alta",
    icon: FireIcon,
    link: "/trend",
  },
  {
    title: "Shopping",
    icon: ShopIcon,
    link: "/shopping",
  },
  {
    title: "Música",
    icon: MusicIcon,
    link: "/music",
  },
  {
    title: "Filmes",
    icon: MovieIcon,
    link: "/movies",
  },
  {
    title: "Ao vivo",
    icon: LiveIcon,
    link: "/live",
  },
  {
    title: "Jogos",
    icon: GameIcon,
    link: "/gaming",
  },
  {
    title: "Notícias",
    icon: NewsIcon,
    link: "/news",
  },
  {
    title: "Esportes",
    icon: SportIcon,
    link: "/sports",
  },
  {
    title: "Aprender",
    icon: LearnIcon,
    link: "/learn",
  },
];

const moreYoutubeIcons = [
  {
    title: "YouTube Premium",
    icon: YoutubeIcon,
  },
  {
    title: "YouTube Studio",
    icon: YoutubeStudioIcon,
  },
  {
    title: "YouTube Music",
    icon: YoutubeMusicIcon,
  },
  {
    title: "YouTube Kids",
    icon: YoutubeKidsIcon,
  },
];

const openMenuItemsLastGroup = [
  {
    title: "Configurações",
    icon: ConfigIcon,
    link: "/configuration",
  },
  {
    title: "Histórico de denúncias",
    icon: FlagIcon,
    link: "/denunciation-history",
  },
  {
    title: "Ajuda",
    icon: HelpIcon,
    link: "/help",
  },
  {
    title: "Enviar feedback",
    icon: FeedbackIcon,
    link: "/feedback",
  },
];

function Menu() {
  const { isOpenMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <Container isOpenMenu={isOpenMenu} >

      {
        (!isOpenMenu) 
          ? (
            closeMenuItems.map((item, index) => (
                <MenuItem key={index} isOpenMenu={isOpenMenu} title={item.title} onClick={() => navigate(item.link)}>
                  <ButtonIcon alt={item.title} src={item.icon} isOpenMenu={isOpenMenu} />
                  <span>{item.title}</span>
                </MenuItem>
              )
            )
          )
          : (
            openMenuItemsFirstGroup.map((item, index) => (
              <MenuItem key={index} isOpenMenu={isOpenMenu} title={item.title} onClick={() => navigate(item.link)}>
                <ButtonIcon alt={item.title} src={item.icon} isOpenMenu={isOpenMenu} />
                <span>{item.title}</span>
              </MenuItem>    
            ))
          )
      } 

      {
        (!isOpenMenu)
          ? null
          : (
            <Divider />
          )
      }

      {
        (!isOpenMenu) 
        ? null
        : (
          openMenuItemsSecondGroup.map((item, index) => (
            <MenuItem key={index} isOpenMenu={isOpenMenu} title={item.title} onClick={() => navigate(item.link)}>
              <ButtonIcon alt={item.title} src={item.icon} isOpenMenu={isOpenMenu} />
              <span>{item.title}</span>
            </MenuItem>    
          ))
        )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <Divider />
          )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <>
              <OpenMenuSectionTitle>
                Inscrições
              </OpenMenuSectionTitle>
                {
                  users.map((item) => (
                    <AvatarContainer title={item.name}>
                      <ImgContainer>
                        <AvatarImg alt={item.name} src={item.image} />
                      </ImgContainer>
                      <NameContainer>
                        <AvatarName>{item.name}</AvatarName>
                      </NameContainer>
                    </AvatarContainer>
                  ))
                } 
            </>
          )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <Divider />
          )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <>
              <OpenMenuSectionTitle>
                Explorar
              </OpenMenuSectionTitle>
                {
                  (!isOpenMenu) 
                  ? null
                  : (
                    openMenuExplorerGroup.map((item, index) => (
                      <MenuItem key={index} isOpenMenu={isOpenMenu} title={item.title} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt={item.title} src={item.icon} isOpenMenu={isOpenMenu} />
                        <span>{item.title}</span>
                      </MenuItem>    
                    ))
                  )
                } 
            </>
          )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <Divider />
          )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <>
              <OpenMenuSectionTitle>
                Mais do YouTube
              </OpenMenuSectionTitle>
                {
                  (!isOpenMenu) 
                  ? null
                  : (
                    moreYoutubeIcons.map((item, index) => (
                      <MenuItem key={index} isOpenMenu={isOpenMenu} title={item.title}>
                        <ButtonIcon alt={item.title} src={item.icon} width='30px' isOpenMenu={isOpenMenu} />
                        <span>{item.title}</span>
                      </MenuItem>    
                    ))
                  )
                } 
            </>
          )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <Divider />
          )
      }
      
      {
        (!isOpenMenu) 
        ? null
        : (
          openMenuItemsLastGroup.map((item, index) => (
            <MenuItem key={index} isOpenMenu={isOpenMenu} title={item.title} onClick={() => navigate(item.link)}>
              <ButtonIcon alt={item.title} src={item.icon} isOpenMenu={isOpenMenu} />
              <span>{item.title}</span>
            </MenuItem>    
          ))
        )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <Divider />
          )
      }

      {
        (!isOpenMenu)
          ? null
          : (
            <>
              <FooterDivider />
              <FooterLinks>Sobre</FooterLinks>
              <FooterLinks>Imprensa</FooterLinks>
              <FooterLinks>Direitos autorais</FooterLinks>
              <FooterLinks>Entre em contato</FooterLinks>
              <FooterLinks>Criadores de conteúdo</FooterLinks>
              <FooterLinks>Publicidade</FooterLinks>
              <FooterLinks>Desenvolvedores</FooterLinks>
              <FooterDivider />
              <FooterLinks>Termos</FooterLinks>
              <FooterLinks>Privacidade</FooterLinks>
              <FooterLinks>Política e segurança</FooterLinks>
              <FooterLinks>Como funciona o YouTube</FooterLinks>
              <FooterLinks>Testar os novos recursos</FooterLinks>
              <FooterDivider />
              <FooterCopyright>© 2023 Google LLC</FooterCopyright>
              <FooterDivider />
            </>
          )
      }


    </Container>
  )
}

export default Menu;