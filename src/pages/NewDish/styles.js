import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  .content {
    display: grid;

    padding: 1rem 3.2rem 10rem;

    gap: 2.4rem;

    a {
      display: flex;
      align-items: center;
    
      margin: 2rem 0 1.6rem;
    
      font-weight: 500;
      
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    h1 {
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    form {
      max-width: 90vw;

      display: grid;
      
      gap: 2.4rem;

      .input-wrapper {
        display: flex;
        flex-direction: column;

        gap: 1.6rem;

        label, p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto';
        }

        input[type="file"] {
          display: none;
        }

        
        .select {
          width: 100%;
          display: flex;
          align-items: center;

          padding: .6rem;
        
          position: relative;
          
          border-radius: .5rem;
          
          background: ${({ theme }) => theme.COLORS.DARK_900};
    
          select {
            width: 100%;
            
            padding: 1rem;

            border: none;
            
            font-family: 'Roboto';
            font-size: 1.4rem;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            
            background: ${({ theme }) => theme.COLORS.DARK_900};
           
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            
            &:focus{
              outline: none;
            } 
          }
          
          .downArrow {
            position: absolute;
            right: 1.6rem;
          }
        }

        .inputImage {
          display: flex;
          align-items: center;

          padding: 1.2rem 3.2rem;

          gap: .8rem;

          border-radius: .8rem;
          background: ${({ theme }) => theme.COLORS.DARK_800};

          font-weight: 500;
          line-height: 2.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
        
        .ingredients {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          
          padding: .8rem;
          
          gap: 1.6rem;

          border-radius: .8rem;

          background: ${({ theme }) => theme.COLORS.DARK_800};
        }
        
        textarea {
          height: 17.2rem;

          padding: 1.4rem;

          resize: none;
          
          border: none;
          border-radius: .8rem;
          
          background: ${({ theme }) => theme.COLORS.DARK_800};

          &::placeholder {
            font-family: 'Roboto';
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
          }
        }
      }

      .save {
        margin-bottom: 5rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.desktop}) {
      width: 100%;
      justify-content: center;

      form {
        width: 80vw;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: auto auto auto auto;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        gap: 3.2rem;
        
        .input-wrapper {
          .ingredients {
            padding: .4rem .8rem;
          }

          .select {
            padding:.3rem;
            background: ${({ theme }) => theme.COLORS.DARK_800};

            select {
              background: ${({ theme }) => theme.COLORS.DARK_800};
            }
          }
        }
      }

        .input-wrapper:nth-child(1) {
          grid-area: 1 / 1 / 2 / 4;

          .inputImage {
           font-size: 1.4rem;
          }
        }

        .input-wrapper:nth-child(2) {
          grid-area: 1 / 4 / 2 / 8;
        }

        .input-wrapper:nth-child(3) {
          grid-area: 1 / 8 / 2 / 11;
        }

        .input-wrapper:nth-child(4) {
          grid-area: 2 / 1 / 3 / 9;
        }

        .input-wrapper:nth-child(5) {
          grid-area: 2 / 9 / 3 / 11;
        }

        .input-wrapper:nth-child(6) {
          grid-area: 3 / 1 / 4 / 11;
        }

        .save {
          grid-area: 4 / 8 / 5 / 11;
        }
    }
  }
`