import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
  width: 100%;

  padding: 5.6rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  
  .hide {
    display: none;
  }
  
  .desktop {
    display: none;
  }

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    padding: 2.4rem 12.3rem;
    
    #header {
      gap: 3.2rem;
    }

    .desktop {
      display: inline;
    }

    .mobile {
      display: none;
    }

    .search {
      width: 100%;
    }

    .button {
      max-width: 21.6rem;
      min-width: 16rem;
    }
  }
`

export const Menu = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 2;

  top: 0;
  right: 0;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  .menu {
    padding: 0 2.8rem;

    .openMenu {

      transition: ease-in;
      display: flex;
      
      padding: 5.6rem 0 2.4rem;
      gap: 1.6rem;

      svg {
        cursor: pointer;

        font-size: 1.8rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      h3 {
        font-family: 'Roboto';
        font-size: 2.1rem;
        font-weight: 400;
      }
      
    }

    ul {
      list-style: none;
    }

    li {
      padding: 1rem;
    }

    a {
      font-size: 2rem;
      font-weight: 300;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export const Logo = styled.a`
  min-width: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: .8rem;

  font-family: 'Roboto';

  background: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  span {
    grid-area: admin;

    font-size: 1.2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }


  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    display: grid;
    grid-template-areas:
    "svg name"
    ". admin";

    position: relative;
    
    span {
      position: absolute;
      right: 0;
      top: -1rem;
    }
  }
`

export const Click = styled.div`
  svg {
    position: relative;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  span {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;

    border-radius: 50%;

    position: absolute;
    top: 49px;
    right: 19px;
    
    font-size: 1.4rem;
    font-weight: 500;
    
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

  }
`