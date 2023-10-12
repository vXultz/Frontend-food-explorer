import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;


  background-color: ${({ theme }) => theme.COLORS.DARK_600};


  > div {
    display: flex;
    gap: .4rem;
    align-items: center;
  }
  
  .logo {
    svg {
      width: 2rem;
      height: 2rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  .rights {
    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      font-size: 1.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    padding: 2.4rem 12rem;

    div {
      gap: 1rem;
    }

    .logo {
      p {
        font-size: 2.4rem;
      }

      svg {
        width: 3rem;
        height: 3rem;
      }
    }

    .rights {
      p {
        font-size: 1.4rem;
      }
    }
  }
`