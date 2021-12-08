import { HeaderContainer } from "./styles";
import Logo_Header from "../../images/Logo_header.png";
import Lupa from "../../images/Lupa.png";
import Icone_user from "../../images/Icone_user.png";
import Icone_carrinho from "../../images/Icone_carrinho.png";

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
        <aside>
          <img src={Icone_carrinho} alt="Icone_carrinho" />
          <div>
            <span>1</span>
          </div>
        </aside>
      </div>
    </HeaderContainer>
  );
}
