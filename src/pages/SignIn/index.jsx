import { Container } from './styles'

import img from '../../assets/polygon.svg'

import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { InputInfo } from '../../components/InputInfo'

export function SignIn() {
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
          />
        </div>
        <div className='inputData'>
          <label htmlFor="password">Password</label>
          <InputInfo
            id='password'
            placeholder='Type your password'
            type='password'
          />
        </div>
        <Button title='Sign in' />
        <Link to='/register'>Create account</Link>
      </form>
    </Container>
  )
}