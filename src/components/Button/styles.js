import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: .5rem;
  padding: 1.2rem 2.4rem;
  
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  &:disabled {
   background: ${({ theme }) => theme.COLORS.TOMATO_400};
   cursor: default;
  }

  &:not(:disabled):hover {
   background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`