import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 4.5rem 0 6.5rem;

  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 7rem;

    gap: 1rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    h1 {
      font-family: 'Roboto';
      font-size: clamp(2rem, 3.2rem, 3.7rem);
      font-weight: 700;
    }
  }

  form {
    width: 100%;

    a {
      display: flex;
      justify-content: center;
      margin-top: 3.2rem;
      
      font-size: 1.4rem;
      font-weight: 500;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    h2 {
      display: none;
    }
  }

  .inputData {
    display: flex;
    flex-direction: column;
    
    margin-bottom: 3.2rem;

    gap: .8rem;

    input {
      height: 3rem;
    }
  }

  


  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    display: grid;
    grid-template-areas:
    "logo form";
    grid-template-columns: 2fr 1fr .2fr;

    .logo {
      margin-left: 20%;

      img {
        width: 5rem;
        height: 5rem;
      }

      h1 {
        font-family: 'Roboto';
        font-size: 4.2rem;
        font-weight: 700;
      }
    }

    .inputData {
      input {
        height: 6rem;
      }
    }

    form {
      min-width: 50rem;
      padding: 6.4rem;
      margin-left: 5rem;

      border-radius: 1.6rem;
      
      background: ${({ theme }) => theme.COLORS.DARK_700};

      h2 {
        display: flex;
        justify-content: center;
        margin-bottom: 3.2rem;

        font-size: 3.2rem;
        font-weight: 500;
      }
    }
  }
`