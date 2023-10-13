import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
  width: 21rem;
  
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 2.4rem;
  gap: 1.2rem;
  border-radius: .8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 500;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    cursor: pointer;
  }

  span {
    font-family: 'Roboto';
    text-align: center;

    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

 .bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #buttonAdd {
      height: 3rem;
    }

  section {
    display: flex;

    margin-bottom: 1.6rem;
    padding: .4rem 0;
    
    gap: 1.4rem;

    button {
      background: none;
      border: none;

      &:hover {
        filter: brightness(.8);
      }

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    span {
      font-family: 'Roboto';

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    
  }
 }

  .heart {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    color: white;
    transition: filter .3s;
    
    cursor: pointer;
  }

  .desktop {
    display: none;
  }



  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    width: 30rem;

    gap: 1.5rem;

    .desktop {
      display: inline;
      text-align: center;
    }

    img {
      width: 17.6rem;
      height: 17.6rem;
    }

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    .bottom {
      flex-direction: row;
      justify-content: space-between;

      #buttonAdd {
        height: 5rem;
      }

      section {
        margin-bottom: 0;

        p {
          font-size: 2rem;
          line-height: 160%;
          font-weight: 700;
        }
      }

      button {
        max-width: 13rem;
      }
    }

    span {
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 160%;
    }
  }
`