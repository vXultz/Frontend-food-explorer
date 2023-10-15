import { useState } from 'react'

import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import img from '../../assets/polygon.svg'

import { Button } from '../../components/Button'
import { InputInfo } from '../../components/InputInfo'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <div className='logo'>
        <img src={img} alt="polygon logo" />
        <h1>Food Explorer</h1>
      </div>
      <form action="">
        <h2>Login</h2>
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
        <Button title='Sign in' onClick={handleSignIn} />
        <Link to='/register'>Create account</Link>
      </form>
    </Container>
  )
}