import { Container, Gradient } from "./styles"

import { Card } from "../../components/Card"

import { FiChevronRight } from "react-icons/fi"

import '@splidejs/react-splide/css'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'


export function Carousel() {
  return (
    <Container>
      <section className='type desktop'>
        <h2>Type</h2>
        <div className='cards'>
          <Splide
            aria-label='type'
            hasTrack={false}
            options={{
              rewind: true,
              width: '100%',
              perPage: 3,
            }}
          >
            <SplideTrack>
              <SplideSlide>
                <Card />
              </SplideSlide>
              <SplideSlide>
                <Card />
              </SplideSlide>
              <SplideSlide>
                <Card />
              </SplideSlide>
              <SplideSlide>
                <Card />
              </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <FiChevronRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <FiChevronRight />
              </button>
            </div>
          </Splide>
          <Gradient className='left' />
          <Gradient className='right' />
        </div>
      </section>
    </Container>
  )
}