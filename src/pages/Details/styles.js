import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  .content {
    padding: 1.6rem 5.6rem 13rem;
    text-align: center;
    display: flex;
    flex-direction: column;

    img {
      width: 26.4rem;
      height: 26.4rem;
      border-radius: 50%;
      align-self: center;
    }


    a {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2.4rem;
      font-weight: 500;

      display: flex;
      align-items: center;
      margin: 2rem 0 1.6rem;

    }

    .info {
      h1 {
        font-weight: 500;
        font-size: 2.7rem;
        margin: 1.6rem 0 2.4rem;
      }

      p, h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        line-height: 140%;
      }

      .tags {
        display: grid;
        align-items: center;
        justify-content: center;

        grid-template-columns: repeat(auto-fill, 11rem);
        row-gap: 2.4rem;
        column-gap: 2.4rem;

        margin-top: 2.4rem;

        padding: .4rem .8rem;

      }

      section {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 1.6rem;

        margin-top: 4.8rem;


        .orderNumber {
          display: flex;
          gap: 1.6rem;
          align-items: center;

          button {
          background: none;
          border: none;
          width: 2.7rem;
          height: 2.7rem;
          }

          span {
            font-family: 'Roboto';
            font-size: 2.2rem;
            font-weight: 700;
            line-height: 160%;
          }
        }
    }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    .content {
      display: grid;
      justify-content: space-around;
      grid-template-areas:
      "return ."
      "image info";

      img {
        margin-top: 4.2rem;
        width: 39rem;
        height: auto;

        grid-area: image;
      }

      a {
        grid-area: return;
        font-weight: 700;
      }

      .info {
        grid-area: info;

        text-align: left;
        width: 68rem;

        align-self: center;

        margin-left: 4.7rem;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 2.4rem;
        }

        .tags {
          justify-content: left;
          padding: 0;
        }

        section {
         justify-content: left;
         width: fit-content;
        }
      }
    }
  }
`