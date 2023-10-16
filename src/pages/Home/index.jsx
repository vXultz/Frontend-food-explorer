import { Container } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'

import img from '../../assets/macaron.png'

import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'

import { FiXCircle } from 'react-icons/fi'


export function Home() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState([])
  const [dishes, setDishes] = useState([])

  const { orderItems, addOrder } = useAuth()

  useEffect(() => {
    async function fetchTypes() {
      const response = await api.get("/type")
      setType(response.data)
    }

    async function fetchDishes() {
      if (search === '') {
        const response = await api.get(`/dishes?search=${search}`)
        setDishes(response.data);
      }
      else {
        const response = await api.get(`/dishes?search=${search}`)
        setDishes(response.data);
      }
    }

    fetchTypes();
    fetchDishes();
  }, [search])

  useEffect(() => {
    addOrder()
  }, [addOrder])



  return (
    <Container>
      <Header
        onChange={e => setSearch(e.target.value)}
        orderItems={orderItems}
      />
      <div className='content'>
        <div className='macaron'>
          <img src={img} alt="Macarons in the air" />
          <div className='macaronText'>
            <h1>Unmatched flavors</h1>
            <p>Feel the care of the preparation with selected ingredients</p>
          </div>
        </div>
        <div className='mobile'>
          {
            type.map((type) => (
              <section className="dishes" key={String(type.id)}>
                <h2>{type.name}</h2>
                <div className="cards">
                  {
                    dishes.filter(dish => dish.type == type.name).map((dish) => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                      />
                    )
                    )
                  }
                  {dishes
                    .filter(d => d.type === type.name)
                    .length === 0 && (
                      <p className="noDishes"> <FiXCircle size={10} />Nenhum prato encontrado.</p>
                    )}
                </div>
              </section>
            ))
          }
        </div>
        <Carousel search={search} />
      </div>
      <Footer className='footer' />
    </Container>
  )
}