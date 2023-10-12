import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.6rem;

  border: none;
  border-radius: .5rem;
  
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  font-size: clamp(.8rem, 1.2rem, 1.6rem);
  font-weight: 500;

  gap: .8rem;

`