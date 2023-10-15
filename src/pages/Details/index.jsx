import { Container } from './styles'

import { Link } from 'react-router-dom'

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonAdd } from "../../components/ButtonAdd"
import { Tag } from "../../components/Tag"

import img from '../../assets/prato1.png'

import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi"

export function Details() {
  return (
    <Container>
      <Header />
      <div className='content'>
        <Link to="/"><FiChevronLeft />Return</Link>
        <img src={img} alt="dish photo" />
        <div className='info'>
          <h1>Dish name</h1>
          <p>description</p>
          <div className='tags'>
            <Tag title='test' />
            <Tag title='test' />
            <Tag title='test' />
            <Tag title='test' />
          </div>
          <section>
            <div className='orderNumber'>
              <button>
                <FiMinus size={24} />
              </button>
              <span>0</span>
              <button>
                <FiPlus size={24} />
              </button>
            </div>
            <ButtonAdd text='Order - $' />
          </section>
        </div>
      </div>
      <Footer />
    </Container>
  )
}