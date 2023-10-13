import { Container } from './styles'

import img from '../../assets/polygon.svg'

import { Button } from '../../components/Button'
import { InputInfo } from '../../components/InputInfo'

export function SignUp() {
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
          />
        </div>
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
        <Button title='Create account' />
        <a href="">Already have an account</a>
      </form>
    </Container>
  )
}