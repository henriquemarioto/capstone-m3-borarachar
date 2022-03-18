import { Container, ContentLogo, ContentMenu } from "./styles";
import { VscHome } from "react-icons/vsc";
import { CgProfile, CgSearch } from "react-icons/cg";
import { MdOutlineNotificationsNone, MdPeopleOutline } from "react-icons/md";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const [showInput, setShowInput] = useState(false);
  const history = useHistory();
  return (
    <Container>
      <ContentLogo>
        <div className="logo">
          <h2>DIVIDE</h2>

          <p>COMIGO</p>
        </div>

        <div className="divNav">
          {showInput && <input type="text" placeholder="Pesquise aqui" />}
          <button
            onClick={() => setShowInput(!showInput)}
            className="bttPesquisar"
          >
            <CgSearch size={20} />
          </button>
        </div>
      </ContentLogo>
      <ContentMenu>
        <button className="bttIcons" onClick={() => history.push("/dashboard")}>
          <VscHome size={30} />
          <span className="legenda">Home</span>
        </button>

        <button className="bttIcons" onClick={() => history.push("/mygroups")}>
          <MdPeopleOutline size={30} />

          <span className="legenda">Meus grupos</span>
        </button>
        <button className="bttIcons" onClick={() => history.push("/profile")}>
          <CgProfile size={30} />
          <span className="legenda">Perfil</span>
        </button>
        <button
          className="bttIcons"
          onClick={() => history.push("/notifications")}
        >
          <MdOutlineNotificationsNone size={30} />
          <span className="legenda">Notificações</span>
        </button>
      </ContentMenu>
    </Container>
  );
}
export default Header;
