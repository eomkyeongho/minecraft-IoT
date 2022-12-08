import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { MainNav } from './Styles/Container/Header/Header.style'
import './NavB.css';

const NavBars = () => {
  return (
    
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <MainNav>
          <Navbar.Brand href="/Intro">
            Y A H
          </Navbar.Brand>
        </MainNav>
      </Navbar>
  )
}

export default NavBars