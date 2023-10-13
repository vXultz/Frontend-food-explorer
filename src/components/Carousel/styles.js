import styled from "styled-components";

export const Container = styled.div`

  .cards {
    height: 46rem;
  }
  .splide__arrow {
    width: 10%;

    position: absolute;

    font-size: 4rem;

    background: none;

    opacity: 1;
  }

  .splide__arrow--prev {
    left: 0;
  }

  .splide__arrow--next {
    right: 0;
  }

  .splide__pagination__page{
    display: none;
  }
  
  .splide:not(.is-overflow) .splide__arrows {
    display: none;
  }
`

export const Gradient = styled.div`
  width: 22.4rem;
  height: 100%;

  position: absolute;
  pointer-events: none;

  background: ${({ theme }) => theme.COLORS.GRADIENT_100};
`