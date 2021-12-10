import { SlideContainer } from "./styles";
import Photo_shoes from "../../images/Photo_shoes.png";
import Photo_Slipper from "../../images/Photo_Slipper.png";
import Photo_boot from "../../images/Photo_boot.png";
import Photo_belt from "../../images/Photo_belt.png";
import Icon_arrow_left from "../../images/Icon_arrow_left.png";
import Icon_arrow_right from "../../images/Icon_arrow_right.png";
import Icon_star from "../../images/Icon_star.png";
import Icon_two_star from "../../images/Icon_two_star.png";
import Icon_three_star from "../../images/Icon_three_star.png";
import Icon_four_star from "../../images/Icon_four_star.png";

export const Slide = () => {
  return (
    <SlideContainer>
      <div>
        <strong>Mais Vendidos</strong>
        <aside />
      </div>
      <section>
        <aside className="left">
          <img src={Icon_arrow_left} alt="Icone seta" />
        </aside>
        <div>
          <img src={Photo_shoes} alt="Foto tênis social" />
          <article>
            <p>SAPATO FLOATER PRETO</p>
            <img src={Icon_star} alt="Icone estrelas" />
            <span>de R$ 279,00</span>
            <b>por R$ 259,90</b>
            <span>ou em 9x de R$ 28,87</span>
            <button>COMPRAR</button>
          </article>
        </div>
        <div>
          <img src={Photo_Slipper} alt="Foto Chinelo" />
          <article>
            <p>SANDÁLIA LINHO BROWN</p>
            <img src={Icon_four_star} alt="Icone estrelas" />
            <span>de R$ 299,00</span>
            <b>por R$ 199,00</b>
            <span>ou em 4x de R$ 49,75</span>
            <button>COMPRAR</button>
          </article>
        </div>
        <div>
          <img src={Photo_boot} alt="Foto botina" />
          <article>
            <p>BOTA MUSTANG PRETO</p>
            <img src={Icon_two_star} alt="Icone estrelas" />
            <span className="linha_riscado">de R$ 329,00</span>
            <b>por R$ 299,90</b>
            <span>ou em 10x de R$ 29,90</span>
            <button>COMPRAR</button>
          </article>
        </div>
        <div>
          <img src={Photo_belt} alt="Foto Cinto" />
          <article>
            <p>CINTO SEMICROMO PRETO 40MM</p>
            <img src={Icon_three_star} alt="Icone estrelas" />
            <span>de R$ 119,00</span>
            <b>por R$ 79,90</b>
            <span>ou em 10x de R$ 7.99</span>
            <button>COMPRAR</button>
          </article>
        </div>
        <aside className="right">
          <img src={Icon_arrow_right} alt="Icone seta" />
        </aside>
      </section>
    </SlideContainer>
  );
};
