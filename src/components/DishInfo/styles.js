import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"


export const Container = styled.input`
  width: 100%;
  padding: 3rem 1.4rem;
  
  border: none;
  border-radius: .8rem;
  
  background: ${({ theme }) => theme.COLORS.DARK_800};

  &::placeholder {
    font-family: 'Roboto';
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    padding: 1.2rem 1.4rem;
  }
`