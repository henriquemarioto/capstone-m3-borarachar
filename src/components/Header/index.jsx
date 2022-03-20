import { useState } from "react";
import { useHistory } from "react-router-dom";
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

function Header({ search = false }) {
  const [openInput, setOpenInput] = useState(false);

  const history = useHistory();

  return (
    <Container>
      <ContentContainer>
        <TopHeader openInput={openInput}>
          <img src={logo} alt="Logotipo BoraRachar" />

          <SearchContainer openInput={openInput}>
            <input type="text" placeholder="Pesquise aqui" />
            <SearchButton
              onClick={() => setOpenInput(!openInput)}
              openInput={openInput}
            >
              <MdSearch />
            </SearchButton>
          </SearchContainer>
        </TopHeader>

        <Divider />

        <BottomMenu>
          <MenuButton onClick={() => history.push("/dashboard")}>
            <div className="circle">
              <MdHome />
            </div>
            <span>Home</span>
          </MenuButton>

          <MenuButton onClick={() => history.push("/mygroups")}>
            <div className="circle">
              <MdGroups />
            </div>
            <span>Meus grupos</span>
          </MenuButton>
          <MenuButton onClick={() => history.push("/profile")}>
            <div className="circle">
              <MdPerson />
            </div>

            <span>Perfil</span>
          </MenuButton>
          <MenuButton onClick={() => history.push("/notifications")}>
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
