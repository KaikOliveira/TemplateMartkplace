import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Banner } from "../../components/Banner"
import { Slide } from "../../components/Slide";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner/>
      <Slide/>

      <h1>Home</h1>

      <Button>Button da HOme</Button>
    </Container>
  );
}
