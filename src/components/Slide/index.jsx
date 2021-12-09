import { SlideContainer } from "./styles";
import Photo_shoes from "../../images/Photo_shoes.png";
import Photo_Slipper from "../../images/Photo_Slipper.png";
import Photo_boot from "../../images/Photo_boot.png";
import Photo_belt from "../../images/Photo_belt.png";

export const Slide = () => {
  return (
    <SlideContainer>
      <div>
        <div>
          <strong>Mais Vendidos</strong>
        </div>
        <div>
          <img src={Photo_shoes} alt="Foto tênis social" />
        </div>
        <div>
          <img src={Photo_Slipper} alt="Foto Chinelo" />
        </div>
        <div>
          <img src={Photo_boot} alt="Foto botina" />
        </div>
        <div>
          <img src={Photo_belt} alt="Foto Cinto" />
        </div>
      </div>
    </SlideContainer>
  );
};
