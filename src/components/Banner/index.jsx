import { BannerContainer, Dots } from "./styles";
import Banner_img from "../../images/Banner.png";

export const Banner = () => {
  return (
    <BannerContainer>
      <img src={Banner_img} alt="Banner" />
      <div>
        <p>Olá, o que você está buscando?</p>
        <strong>Criar ou migrar seu e-commerce?</strong>
      </div>
    <Dots>
        <aside/>
        <aside/>
        <aside/>
        <aside/>
    </Dots>
    </BannerContainer>
  );
};
