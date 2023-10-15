import { Container } from './styles'

import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { InputInfo } from '../../components/InputInfo'
import { AddIngredient } from '../../components/AddIngredient'

import { FiChevronLeft, FiChevronDown, FiUpload } from "react-icons/fi";


export function EditDish() {
  const [data, setData] = useState([])
  const [dbType, setDbType] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')
  const [addIngredient, setAddIngredient] = useState('')

  const params = useParams()

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, addIngredient])
    setAddIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient != deleted))
  }

  function handleImage(e) {
    const file = e.target.files[0]
    setImage(file)
  }

  async function handleDelete() {
    const confirm = window.confirm('Are you sure you want to delete this dish?')

    if (confirm) {
      await api.delete(`/dishes/${params.id}`)
      navigate('/')
    }
  }

  async function handleEditDish() {
    try {
      const dish_id = params.id
      await api.put(`/dishes/${dish_id}`, {
        name,
        description,
        type,
        ingredients,
        price
      })

      if (image) {
        const fileUpload = new FormData()
        fileUpload.append('image', image)

        await api.patch(`/dishes/${dish_id}`, fileUpload)
      }

      alert('Dish successfully edited')
      navigate('/')

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Was not possible to edit dish')
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDish();

    async function fetchType() {
      const response = await api.get("/type");
      setDbType(response.data);
    }

    fetchType();
  }, [params.id]);


  useEffect(() => {
    setName(data.name);
    setType(data.type);
    setPrice(data.price);
    setIngredients(data.ingredients);
    setDescription(data.description);
  }, [data]);


  return (
    <Container>
      <Header />
      <div className='content'>
        <Link to="/"><FiChevronLeft size={22} /> Return</Link>
        <h1>Edit dish</h1>
        <form action="">
          <div className='input-wrapper image'>
            <label htmlFor="image">Dish image</label>
            <label className='inputImage' htmlFor="image"><FiUpload size={22} />Select an image</label>
            <InputInfo
              id='image'
              type='file'
              placeholder='Select an image'
              onChange={handleImage}
            />
          </div>
          <div className='input-wrapper name'>
            <label htmlFor="name">Name</label>
            <InputInfo
              id='name'
              type='text'
              placeholder='Example: Spaghetti bolognese'
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='input-wrapper type'>
            <label htmlFor="type">Dish type</label>
            <div className='select'>
              <select id='type' onChange={e => setType(e.target.value)}>
                <option value={data.type}>{data.type}</option>
                {dbType && dbType.map((type, index) => (
                  <option
                    key={index}
                    value={type.name}
                  >
                    {type.name}
                  </option>
                ))
                }
              </select>
              <label className='downArrow' htmlFor="type"><FiChevronDown size={22} /></label>
            </div>
          </div>
          <div className='input-wrapper ingredientsInput'>
            <p>Ingredients</p>
            <div className='ingredients'>
              {ingredients && ingredients.map((ingredient, index) => (
                <AddIngredient
                  key={String(index)}
                  value={ingredient.name ? ingredient.name : ingredient}
                  onClick={() => { handleRemoveIngredient(ingredient) }}
                />
              ))
              }
              <AddIngredient
                isnew
                placeholder='Add'
                value={addIngredient}
                onChange={e => setAddIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </div>
          <div className='input-wrapper price'>
            <label htmlFor="price">Price</label>
            <InputInfo
              id='price'
              type='number'
              placeholder='$00,00'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className='input-wrapper description'>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              placeholder='Description of the dish'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className='input-wrapper buttons'>
            <Button
              className='delete'
              title='Delete dish'
              onClick={handleDelete}
            />
            <Button
              className='save'
              title='Save'
              onClick={handleEditDish}
            />
          </div>
        </form>
      </div>
      <Footer />
    </Container>
  )
}