import './az.css';

import {BsLinkedin} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';



const Footer = () => {
  return (
    <section id='aboutMe' className='AboutMe'>
    <p className='footer__logo'>aitor.zaldua@draftdigital.org</p>

  <div className='footer__socials'>
    <a href='https://www.linkedin.com/in/aitor-zaldua/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
    <a href='https://twitter.com' target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
    <a href='https://github.com/aitorzaldua' target="_blank" rel="noreferrer"><BsGithub/></a>
  </div>

  </section>
)
}

export default Footer;