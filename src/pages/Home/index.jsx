import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Banner } from "../../components/Banner"
import { Slide } from "../../components/Slide";
import { News } from "../../components/News";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner/>
      <Slide/>
      <News/>
      <Footer/>
    </Container>
  );
}
