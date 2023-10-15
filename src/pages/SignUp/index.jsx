import { Container } from './styles'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import img from '../../assets/polygon.svg'

import { Button } from '../../components/Button'
import { InputInfo } from '../../components/InputInfo'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Fill in all fields')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('User was registered successfully')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Was not possible to register')
        }
      })
  }

  return (
    <Container>
      <div className='logo'>
        <img src={img} alt="polygon logo" />
        <h1>Food Explorer</h1>
      </div>
      <form action="">
        <h2>Create your account</h2>
        <div className='inputData'>
          <label htmlFor="name">Name</label>
          <InputInfo
            id='name'
            placeholder='Example: John Smith'
            type='text'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='inputData'>
          <label htmlFor="email">E-mail</label>
          <InputInfo
            id='email'
            placeholder='example@example.com'
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='inputData'>
          <label htmlFor="password">Password</label>
          <InputInfo
            id='password'
            placeholder='Type your password'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button title='Create account' onClick={handleSignUp} />
        <Link to="/">Already have an account</Link>
      </form>
    </Container>
  )
}