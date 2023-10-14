import { Container } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'

import img from '../../assets/macaron.png'

export function Home() {
  return (
    <Container>
      <Header />
      <div className='content'>
        <div className='macaron'>
          <img src={img} alt="Macarons in the air" />
          <div className='macaronText'>
            <h1>Unmatched flavors</h1>
            <p>Feel the care of the preparation with selected ingredients</p>
          </div>
        </div>
        <div className='mobile'>
          <section className='dishes'>
            <h2>Type</h2>
            <div className='cards'>
              <Card />
            </div>
          </section>
        </div>
        <Carousel />
      </div>
      <Footer />
    </Container>
  )
}