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
        <button className="bttIcons">
          <VscHome size={30} onClick={() => history.push("/dashboard")} />
          <span className="legenda">Home</span>
        </button>
        <button className="bttIcons">
          <MdPeopleOutline
            size={30}
            onClick={() => history.push("/mygroups")}
          />
          <span className="legenda">Meus grupos</span>
        </button>
        <button className="bttIcons">
          <CgProfile size={30} onClick={() => history.push("/profile")} />
          <span className="legenda">Perfil</span>
        </button>
        <button className="bttIcons">
          <MdOutlineNotificationsNone
            size={30}
            onClick={() => history.push("/notification")}
          />
          <span className="legenda">Notificações</span>
        </button>
      </ContentMenu>
    </Container>
  );
}
export default Header;
