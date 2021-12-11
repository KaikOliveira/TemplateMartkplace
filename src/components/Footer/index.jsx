import { FooterContainer } from "./style";
import Logo_empresa from "../../images/Logo_empresa.png";
import Icon_headset from "../../images/Icon_headset.png";
import Icon_email from "../../images/Icon_email.png";
import Logo_header_white from "../../images/Logo_header_white.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <section>
        <div>
          <div>
            <b>Localização</b>
            <aside />
          </div>
          <address>
            Avenida Andrômeda, 2000. Bloco 6 e 8<br />
            Alphavile SP
            <br />
            brasil@corebiz.ag
            <br />
            +55 11 3090 1039
          </address>
        </div>
        <div>
          <button>
            <img src={Icon_email} alt="Email" />
            ENTRE EM CONTATO
          </button>
          <button>
            <img src={Icon_headset} alt="Headset" />
            FALE COM O NOSSO CONSULTOR ONLINE
          </button>
        </div>
        <div className="Direction_row">
          <span className="Creator">
            <t>Created by</t>
            <img src={Logo_header_white} alt="Logo Rodapé" />
          </span>
          <span className="Creator">
            <t>Powered by</t>
            <img src={Logo_empresa} alt="Logo empresa" className="Vtex"/>
          </span>
        </div>
      </section>
    </FooterContainer>
  );
};
