import { Container, Menu, Logo, Click } from './styles'
import polygon from "../../assets/polygon.svg";

import { Input } from '../Input'
import { Footer } from '../Footer'
import { Button } from '../Button'
import { ButtonAdd } from '../ButtonAdd'


import { FiMenu } from 'react-icons/fi'
import { PiReceipt, PiSignOut, PiX } from 'react-icons/pi'

import { useState } from "react";



export function Header() {

  const [hideMenu, setHideMenu] = useState(true);

  function handleMenu() {
    setHideMenu(!hideMenu)
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
          />
          <ul>
            <li>
              <a href="">New dish</a>
            </li>
            <li>
              <a>Logout</a>
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
          <span>admin</span>
        </Logo>
        <div className='desktop search'>
          <Input
            placeholder='Search for dishes or ingredients'
          />
        </div>
        <Click className='mobile'>
          <PiReceipt className='user' />
          <span>0</span>
        </Click>

        <Button className='desktop button' title='New dish' />

        <Click className='desktop button'>
          <ButtonAdd title='Orders' price='(0)' />
        </Click>

        <Click className='desktop'>
          <PiSignOut size={32} />
        </Click>
      </div>
    </Container>
  )
}