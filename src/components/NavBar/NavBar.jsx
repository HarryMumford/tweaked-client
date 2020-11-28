import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, config } from 'react-spring'
import './navBar.scss'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 400,
    config: config.wobbly,
  })

  const handleMenuToggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className="nav" style={linkAnimation}>
      <div className="flex-container">
        <a href="#feed">FEED</a>
        <a href="#wall">WALL</a>
        <a href="#account">ACCOUNT</a>
      </div>
      <div
        onKeyDown={handleMenuToggle}
        role="button"
        tabIndex={0}
        className="burger-menu"
        onClick={handleMenuToggle}
      >
        <FontAwesomeIcon icon="bars" className="icon" size="lg" />
      </div>
    </div>
  )
}

export default NavBar
