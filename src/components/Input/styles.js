import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: .5rem;
  
  padding: 1.2rem 1.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  gap: 1.4rem;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input {
    width: 100%;
   border: none;
   background-color: ${({ theme }) => theme.COLORS.DARK_900};

    &::placeholder {
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    text-align: center;
    }
  }
`