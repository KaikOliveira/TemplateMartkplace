import { ButtonContainer } from './styles';

export function Button({ children }) {
  return (
    <ButtonContainer type="button">{children}</ButtonContainer>
  )
}