import { Link } from 'react-router-dom'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './styles.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      {/* Container */}
      <div className='container'>
        {/* Body */}
        <div className='body'>
          {/* Social list */}
          <div className='social-list'>
            <div className='social-item'>
              <Link
                to='https://github.com/vincenttang1101/'
                target='_blank'
                rel='noopener noreferrer'
                className='social-item__link'
              >
                <FaGithub className='social-item__icon' />
              </Link>
            </div>
            <div className='social-item'>
              <Link
                to='https://www.linkedin.com/in/quang-tang-955a17183/'
                target='_blank'
                rel='noopener noreferrer'
                className='social-item__link'
              >
                <FaLinkedin className='social-item__icon' />
              </Link>
            </div>
            <div className='social-item'>
              <Link
                to='https://www.facebook.com/vincenttang1101/'
                target='_blank'
                rel='noopener noreferrer'
                className='social-item__link'
              >
                <FaFacebook className='social-item__icon' />
              </Link>
            </div>
          </div>
          <div className='coppyright'>Coppy right © Vincent Tang</div>
        </div>
      </div>
    </footer>
  )
}
