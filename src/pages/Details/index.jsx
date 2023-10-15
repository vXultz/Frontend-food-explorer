import { Container } from './styles'

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonAdd } from "../../components/ButtonAdd"
import { Tag } from "../../components/Tag"

import placeholderImg from '../../assets/placeholder.png'

import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi"

import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Button } from '../../components/Button'



export function Details() {
  const [data, setData] = useState([])
  const [quantity, setQuantity] = useState(1)

  const { user, setOrder, addOrder } = useAuth()
  const isAdmin = user.isAdmin === 1

  const params = useParams()
  const navigate = useNavigate()

  const image = data.image ? `${api.defaults.baseURL}/files/${data.image}` : placeholderImg

  function handleEditDish() {
    navigate(`/editdish/${params.id}`)
  }

  function handlePlus() {
    setQuantity(quantity + 1);
  }

  function handleMinus() {
    quantity <= 1 ? setQuantity(1) :
      setQuantity(quantity - 1);
  }

  function handleSetOrder(data, quantity) {
    const dish_id = data.id
    setOrder({ dish_id, quantity })
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  }, [params.id]);

  useEffect(() => {
    addOrder()
  }, [addOrder])


  return (
    <Container>
      <Header />
      <div className='content'>
        <Link to="/"><FiChevronLeft />Return</Link>
        <img src={image} alt="dish photo" />
        <div className='info'>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          {data.ingredients &&
            <div className="ingredients">
              {data.ingredients.map(ingredient => (
                <Tag
                  key={String(ingredient.id)}
                  title={ingredient.name}
                />
              ))
              }
            </div>
          }
          {isAdmin ?
            <section>
              <Button
                title='Edit dish'
                onClick={handleEditDish}
              />
            </section> :
            <section>
              <div className='orderNumber'>
                <button>
                  <FiMinus size={24} onClick={handleMinus} />
                </button>
                <span>{String(quantity).padStart(2, "0")}</span>
                <button>
                  <FiPlus size={24} onClick={handlePlus} />
                </button>
              </div>
              <ButtonAdd
                text='Order - $'
                onClick={() => handleSetOrder(data, quantity)}
              />
            </section>
          }
        </div>
      </div>
      <Footer />
    </Container>
  )
}