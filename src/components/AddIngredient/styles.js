import styled from "styled-components";

export const Container = styled.div`
  max-width: 13rem;
  min-width: 8rem;

  padding: .4rem .8rem;
  
  display: flex;
  align-items: center;
  
  border-radius: .8rem;
  
  background-color: ${({ theme, isnew }) => isnew ? "none" : theme.COLORS.LIGHT_600};
  
  color: ${({ theme, isnew }) => isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  
  border: ${({ theme, isnew }) => isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  
  button {
    width: 2rem;
    height: 2rem;
    
    display: flex;
    align-items: center;
    
    background: none;
    border: none;
  }

  .delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  input {
    width: 100%;
    height: 3.2rem;

    background: none;
    border: none;
    
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.LIGHT_100};


    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`