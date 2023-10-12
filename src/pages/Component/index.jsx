import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Tag } from '../../components/Tag'
import { DishInfo } from '../../components/DishInfo'

export function Component() {
  return (
    <Container>
      <Input />
      <Button />
      <ButtonAdd />
      <Tag />
      <Footer />
      <DishInfo />
    </Container>
  )
}