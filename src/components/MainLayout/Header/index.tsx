import { Link } from 'react-router-dom'
import { Logo } from '@assets/icons'
import './styles.scss'

export default function Header() {
  return (
    <header className='header'>
      {/* Container */}
      <div className='container'>
        {/* Body */}
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
            {/* Navbar list */}
            <ul className='navbar__list'>
              {/* Navbar item 1 */}
              <li className='navbar-item'>
                <Link to='/' className='navbar-item__link'>
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
