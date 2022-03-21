import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  MdHome,
  MdGroups,
  MdPerson,
  MdNotifications,
  MdSearch,
} from "react-icons/md";

import logo from "../../images/logo-white.svg";

import {
  Container,
  ContentContainer,
  Divider,
  MenuButton,
  BottomMenu,
  TopHeader,
  SearchButton,
  SearchContainer,
} from "./styles";

function Header() {
  const [openInput, setOpenInput] = useState(false);
  const [pageScrollY, setPageScrollY] = useState(0);
  const [scrollPage, setScrollPage] = useState(false);
  const [input, setInput] = useState("");

  const history = useHistory();
  const location = useLocation();

  const handleClick = (link) => {
    history.push(link);
  };

  window.onscroll = () => {
    if (window.pageYOffset > pageScrollY) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }

    setPageScrollY(window.pageYOffset);
  };

  const endpoints = {
    dashboard: "/dashboard",
    mygroups: "/mygroups",
    profile: "/profile",
    notifications: "/notifications",
  };

  const handleOpenInput = () => {
    if (!(openInput && input)) {
      setOpenInput(!openInput);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!input) {
      return
    }

    history.push(`/search?search=${input}`);

  };

  return (
    <Container scrollPage={scrollPage}>
      <ContentContainer>
        <TopHeader openInput={openInput} scrollPage={scrollPage}>
          <img src={logo} alt="Logotipo BoraRachar" />

          <SearchContainer openInput={openInput}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Pesquise aqui"
                value={input}
                onChange={(evt) => setInput(evt.target.value)}
              />
              <SearchButton onClick={handleOpenInput} openInput={openInput}>
                <MdSearch />
              </SearchButton>
            </form>
          </SearchContainer>
        </TopHeader>

        <Divider />

        <BottomMenu>
          <MenuButton
            onClick={() => handleClick(endpoints.dashboard)}
            className={location.pathname === endpoints.dashboard && "active"}
          >
            <div className="circle">
              <MdHome />
            </div>
            <span>Home</span>
          </MenuButton>

          <MenuButton
            onClick={() => handleClick(endpoints.mygroups)}
            className={location.pathname === endpoints.mygroups && "active"}
          >
            <div className="circle">
              <MdGroups />
            </div>
            <span>Meus grupos</span>
          </MenuButton>
          <MenuButton
            onClick={() => handleClick(endpoints.profile)}
            className={location.pathname === endpoints.profile && "active"}
          >
            <div className="circle">
              <MdPerson />
            </div>

            <span>Perfil</span>
          </MenuButton>
          <MenuButton
            onClick={() => handleClick(endpoints.notifications)}
            className={
              location.pathname === endpoints.notifications && "active"
            }
          >
            <div className="circle">
              <MdNotifications />
            </div>
            <span>Notificações</span>
          </MenuButton>
        </BottomMenu>
      </ContentContainer>
    </Container>
  );
}
export default Header;
