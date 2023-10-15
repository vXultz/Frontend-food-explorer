import { Container } from "./styles"
import { useState } from "react";

import { useNavigate } from "react-router-dom"

import { Button } from '../Button'
import img from '../../assets/prato1.png'

import { PiPencilSimple } from "react-icons/pi";
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";

export function Card() {

  const [active, setActive] = useState(false)

  const navigate = useNavigate()

  const handleFillHeart = () => {
    setActive(!active)
  }

  function handleDetails() {
    navigate('/dishes/1')
  }

  return (
    <Container>
      <img src={img} alt="dish photo" />
      <h1 onClick={handleDetails}>Dish name</h1>
      <p className="desktop">Description</p>
      <span>$23,99</span>
      <div className="bottom">
        <section>
          <button>
            <FiMinus size={24} />
          </button>
          <p>0</p>
          <button>
            <FiPlus size={24} />
          </button>
        </section>
        <Button id='buttonAdd' title='add' />
      </div>
      <div className="heart">
        <FiHeart
          size={24}
          onClick={handleFillHeart}
          fill={active ? 'white' : 'none'}
        />
      </div>
    </Container>
  )
}