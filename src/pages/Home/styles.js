import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  .content {
    padding-bottom: 15rem;

    .macaron {
      height: 12rem;
      display: flex;
      flex-direction: row-reverse;

      margin: 4.4rem 1.6rem 6.2rem 3.6rem;

      position: relative;

      background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    img {
      width: clamp(4rem, 45%, 25rem);
      height: auto;

      position: absolute;
      left: -3rem;
      bottom: 0;
    }

    .macaronText {
      min-width: 20rem;

      margin: 3.9rem 2.1rem 0 18.3rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      h1 {
        font-size: 1.7rem;
        font-weight: 600;
        line-height: 140%;
      }

      p {
        font-size: 1.2rem;
        line-height: 140%;
      }

      animation: slideRight .7s ease-in;
    }
    }

    .dishes {
      margin-left: 2.4rem;
      
      h2 {
        margin-bottom: 2.4rem;

        font-size: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      .cards {
        display: flex;

        position: relative;
        
        gap: 1.5rem;

        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.COLORS.DARK_400};
        }
        &::-webkit-scrollbar {
            height: 7px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: .8rem;

          background: ${({ theme }) => theme.COLORS.DARK_1000};
        }
      }

      .left {
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }

      .right {
        position: absolute;
        right: 0;
      }
    }

    .desktop {
      display: none;
    }
  }

  @media (max-width: 374px) {
    .macaron {
      position: relative;

      img {
        display: none;
      }
    }

    .macaronText {
      p {
        margin-left: -10%;

        text-align: center;
      }
      
      h1 {
        margin-left: -10%;

        text-align: center;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
    .content {
      padding: 0 12.4rem 15rem;
    
      .macaron {
        height: 26rem;

        display: flex;
        align-items: center;
        justify-content: space-around;
  
        margin-top: 8rem;
  
        img {
          width: clamp(30rem, 45%, 50rem);
        }
  
        .macaronText {
          margin-left: 30rem;
          h1 {
            font-size: 4rem;
            font-weight: 500;
          }
  
          p {
            font-size: clamp(1.6rem, 60%, 16rem);
          }
        }
      }
  
      .dishes {
        margin-top: 2rem;
       
        h2 {
          font-size: 3.2rem;
        }
        
        .cards {
          height: fit-content;
          margin-bottom: 4.6rem;

          gap: 0;
          
          overflow: hidden;
        }
      }

      .desktop {
        display: inline;
      }

      .mobile {
        display: none;
      }
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(-140px);
    }
    100% {
      transform: translateX(0);
    }
  }

`
