import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Banner } from "../../components/Banner"

export function Home() {
  return (
    <Container>
      <Header />
      <Banner/>

      <h1>Home</h1>

      <Button>Button da HOme</Button>
    </Container>
  );
}
