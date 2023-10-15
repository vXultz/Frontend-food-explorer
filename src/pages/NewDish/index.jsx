import { Container } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { InputInfo } from '../../components/InputInfo'
import { AddIngredient } from '../../components/AddIngredient'

import { FiChevronLeft, FiChevronDown, FiUpload } from "react-icons/fi";


export function NewDish() {
  return (
    <Container>
      <Header />
      <div className='content'>
        <Link to="/"><FiChevronLeft size={22} /> Return</Link>
        <h1>New dish</h1>
        <form action="">
          <div className='input-wrapper image'>
            <label htmlFor="image">Dish image</label>
            <label className='inputImage' htmlFor="image"><FiUpload size={22} />Select an image</label>
            <InputInfo
              id='image'
              type='file'
              placeholder='Select an image'
            />
          </div>
          <div className='input-wrapper name'>
            <label htmlFor="name">Name</label>
            <InputInfo
              id='name'
              type='text'
              placeholder='Example: Spaghetti bolognese'
            />
          </div>
          <div className='input-wrapper type'>
            <label htmlFor="type">Dish type</label>
            <div className='select'>
              <select id='type'>
                <option value="">Meal</option>
                <option value="">Dessert</option>
                <option value="">Drink</option>
              </select>
              <label className='downArrow' htmlFor="type"><FiChevronDown size={22} /></label>
            </div>
          </div>
          <div className='input-wrapper ingredientsInput'>
            <p>Ingredients</p>
            <div className='ingredients'>
              <AddIngredient
                isnew
                placeholder='Add'
              />
            </div>
          </div>
          <div className='input-wrapper price'>
            <label htmlFor="price">Price</label>
            <InputInfo
              id='price'
              type='number'
              placeholder='$00,00'
            />
          </div>
          <div className='input-wrapper description'>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              placeholder='Description of the dish'
            />
          </div>
          <Button className='save' title='Save' />
        </form>
      </div>
      <Footer />
    </Container>
  )
}