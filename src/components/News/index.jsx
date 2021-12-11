import { NewsContainer } from "./style";

export const News = () => {
  return (
    <NewsContainer>
      <div>
        <p>Participe de nossas news com promoções e novidades!</p>
        <span>
          <input type="text" placeholder="Digite seu nome"/>
          <input type="text" placeholder="Digite seu email"/>
          <button>Eu quero!</button>
        </span>
      </div>
    </NewsContainer>
  );
};
