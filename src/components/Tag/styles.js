import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;

  border-radius: .8rem;

  padding: .4rem .8rem;

  background: ${({ theme }) => theme.COLORS.LIGHT_700};

  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`