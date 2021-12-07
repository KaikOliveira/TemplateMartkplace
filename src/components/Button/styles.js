import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px 15px;
  background: teal;
  color: #fff;
  font-size: 18px;
  border: 0 none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    filter: brightness(0.80);
  }
`;