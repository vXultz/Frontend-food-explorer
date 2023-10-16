import { Container } from "./styles"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { Button } from '../Button'
import placeholderImg from '../../assets/placeholder.png'
import { PiPencilSimple } from "react-icons/pi"
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi"

export function Card({ data, ...rest }) {
  const { user, setOrder } = useAuth()
  const isAdmin = user.isAdmin === 1

  const [quantity, setQuantity] = useState(1)
  const [active, setActive] = useState(false)

  const image = data.image ? `${api.defaults.baseURL}/files/${data.image}` : placeholderImg

  const itemPrice = data.price

  const finalPrice = itemPrice * quantity

  const navigate = useNavigate()

  const handleFillHeart = () => {
    setActive(!active)
  }

  function handleDetails() {
    navigate(`/dishes/${data.id}`)
  }

  function handleEditDish() {
    navigate(`/editdish/${data.id}`)
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

  return (
    <Container {...rest}>
      <img src={image} alt="dish photo" />
      <h1 onClick={handleDetails}>{data.name}</h1>
      <p className="desktop">{data.description}</p>
      <span>$ {finalPrice.toFixed(2)}</span>
      <div className="bottom">
        {isAdmin ? '' :
          <section>
            <button>
              <FiMinus size={24} onClick={handleMinus} />
            </button>
            <p>{String(quantity).padStart(2, '0')}</p>
            <button>
              <FiPlus size={24} onClick={handlePlus} />
            </button>
          </section>
        }

        {isAdmin ? '' :
          <Button
            id='buttonAdd'
            title='add'
            onClick={() => handleSetOrder(data, quantity)}
          />}
      </div>
      <div className="heart">
        {isAdmin ?
          <PiPencilSimple
            size={24}
            onClick={handleEditDish}
          /> :
          <FiHeart
            size={24}
            onClick={handleFillHeart}
            fill={active ? 'white' : 'none'}
          />
        }
      </div>
    </Container>
  )
}