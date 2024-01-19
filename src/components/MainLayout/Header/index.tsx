import { Link } from 'react-router-dom'
import { Logo } from '@assets/icons'
import './styles.scss'
import { IoMenu } from 'react-icons/io5'

export default function Header() {
  return (
    <header className='header'>
      {/* Container */}
      <div className='container'>
        <div className='body'>
          {/* Brand */}
          <div className='brand'>
            <Link to='/' className='brand__links'>
              <img src={Logo} alt='Logo' className='brand__logo' />
              <span className='brand__name'>Todo List</span>
            </Link>
          </div>

          {/* navbar */}
          <nav className='navbar'>
            <ul className='navbar__list'>
              <li className='navbar-item'>
                <Link to='/' className='navbar-item__link'>
                  Home
                </Link>
              </li>
              <li className='navbar__item'>
                <Link to='#!' className='navbar-item__link'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <IoMenu className='menu-icon' />
        </div>
      </div>
    </header>
  )
}
