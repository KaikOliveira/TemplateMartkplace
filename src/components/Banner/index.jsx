import { BannerContainer, Dots } from "./styles";
import Banner_img from "../../images/Banner.png";
import { useWindowSize } from "../../Hooks/window-size";
import backgroundimagemobile from "../../images/image_mobile.png";

export const Banner = () => {
  const window = useWindowSize();
  return (
    <BannerContainer>
      <img
        src={window.width < 768 ? backgroundimagemobile : Banner_img}
        alt="Banner"
        className={window.width < 768 ? "img__Banner" : undefined}
      />
      <div>
        <p>Olá, o que você está buscando?</p>
        <strong>Criar ou migrar seu e-commerce?</strong>
      </div>
      <Dots>
        <aside />
        <aside />
        <aside />
        <aside />
      </Dots>
    </BannerContainer>
  );
};
