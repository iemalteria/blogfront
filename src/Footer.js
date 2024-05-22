import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">

          <div className="footer-section">
            <div className='logo-back'>
                <img src="https://iemalteria-back.vercel.app/uploads/logo.png" alt='' className='logo'></img>
            </div>
          </div>

          <div className="footer-section">
            <p style={{ fontSize:'Large',}}> 
            <strong>Contáctenos</strong> <br/>
            <strong>Dirección: </strong>Km 13 via al Magdalena<br/>
            <strong>Teléfono: </strong>+57 3218773581<br/>
            <strong>Email: </strong>institucionmalteria@gmail.com<br/>
            <strong>Horario: </strong>Lunes a Viernes de 6:50 am - 1:50 pm <br/>
            </p>
            <div className='social-media'>
                <ul className='social'>
                    <li><a href='https://www.facebook.com/institucion.educativamalteria/?locale=es_LA'> <FacebookIcon className='ico' /> </a></li>
                    <li><a href='https://www.instagram.com/iemalteria/'> <InstagramIcon className='ico' /> </a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
