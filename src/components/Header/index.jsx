import { HeaderContainer } from "./styles";
import Logo_Header from "../../images/Logo_header.png"
import Lupa from "../../images/Lupa.png"
import Icone_user from "../../images/Icone_user.png"

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo_Header} alt="Logo" />
        <div>
          <input type="text" placeholder="O que está procurando?" />
          <img src={Lupa} alt="ícone" />

        </div>
        <button type="button">
          <img src={Icone_user} alt="Icone_user" />
          <span> Minha Conta</span>
        </button>
        {/*
        <aside>
          <img src="" alt="" />
          <div>1</div>
        </aside>*/}
      </div>
    </HeaderContainer>
  );
}
