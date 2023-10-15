import { Container, Menu, Logo, Click } from './styles'
import polygon from "../../assets/polygon.svg"

import { Input } from '../Input'
import { Footer } from '../Footer'
import { Button } from '../Button'
import { ButtonAdd } from '../ButtonAdd'

import { FiMenu } from 'react-icons/fi'
import { PiReceipt, PiSignOut, PiX } from 'react-icons/pi'

import { Link, useNavigate } from 'react-router-dom'


import { useState } from "react"
import { useAuth } from '../../hooks/auth'



export function Header({ onChange }) {
  const [hideMenu, setHideMenu] = useState(true)
  const { user, signOut, orderItems } = useAuth()

  const navigate = useNavigate()

  const isAdmin = user.isAdmin === 1

  function handleMenu() {
    setHideMenu(!hideMenu)
  }

  function handleNewDish() {
    navigate("/newdish")
  }

  function handleSearch(e) {
    if (e.key === 'Enter') {
      setHideMenu(true);
    }
  }


  return (
    <Container>
      <Menu className={hideMenu ? 'hide' : null}>
        <div className='menu'>
          <div className='openMenu'>
            <a onClick={handleMenu}><PiX size={24} /></a>
            <h3>Menu</h3>
          </div>
          <Input
            placeholder='Search for dishes or ingredients'
            onChange={onChange}
            onKeyDown={handleSearch}
          />
          <ul>
            <li>
              {isAdmin ? <Link to="/newdish">New dish</Link> : ''}
            </li>
            <li>
              <a onClick={signOut}>Logout</a>
            </li>
          </ul>
          <Footer className='footer' />
        </div>
      </Menu>

      <div id='header'>
        <Click className='mobile' onClick={handleMenu}>
          <FiMenu />
        </Click>
        <Logo>
          <img src={polygon} alt="polygon logo" />
          <h1>Food Explorer</h1>
          <span>{isAdmin ? 'admin' : ''}</span>
        </Logo>
        <div className='desktop search'>
          <Input
            placeholder='Search for dishes or ingredients'
          />
        </div>
        {isAdmin ? <div></div> :
          <Click className='mobile'>
            <PiReceipt className='user' />
            <span>0</span>
          </Click>
        }

        {isAdmin ?
          <Button
            className='desktop button'
            title='New dish'
            onClick={handleNewDish}
          /> :
          <Click className='desktop button'>
            <ButtonAdd title='Orders' price={orderItems} />
          </Click>
        }


        <Click className='desktop' onClick={signOut}>
          <PiSignOut size={32} />
        </Click>
      </div>
    </Container>
  )
}