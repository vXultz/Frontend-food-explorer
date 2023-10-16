import { Container } from "./styles"

import { Card } from "../../components/Card"

import { FiChevronRight, FiXCircle } from "react-icons/fi"

import '@splidejs/react-splide/css'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import { useState, useEffect } from 'react'
import { api } from "../../services/api"

export function Carousel({ search }) {
  const [types, setTypes] = useState([])
  const [dish, setDish] = useState([])


  useEffect(() => {
    async function fetchType() {
      const response = await api.get("/type")
      setTypes(response.data);
    }

    async function fetchDishes() {
      if (search === '') {
        const response = await api.get(`/dishes?search=${search}`)
        setDish(response.data);
      }
      else {
        const response = await api.get(`/dishes?search=${search}`)
        setDish(response.data);
      }
    }

    fetchType()
    fetchDishes()
  }, [search])


  return (
    <Container>
      {types.map((type) => (
        <section className='type desktop' key={String(type.id)}>
          <h2>{type.name}</h2>
          <div className='cards'>
            <Splide
              aria-label={String(type.name)}
              hasTrack={false}
              options={{
                rewind: true,
                width: '100%',
                perPage: 4,
                breakpoints: {
                  1440: {
                    perPage: 3
                  },
                  1024: {
                    perPage: 2
                  },
                  800: {
                    perPage: 1
                  }
                },
              }}
            >
              <SplideTrack>
                {
                  dish.filter(dish => dish.type == type.name).map((dish) => (
                    <SplideSlide key={String(dish.id)} >
                      <Card
                        key={String(dish.id)}
                        data={dish}
                      />
                    </SplideSlide>
                  )
                  )
                }
                {dish
                  .filter(d => d.type === type.name)
                  .length === 0 && (
                    <p className="noDishes"> <FiXCircle size={18} />No dishes found.</p>
                  )}
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
          </div>
        </section>
      ))
      }
    </Container>
  )
}