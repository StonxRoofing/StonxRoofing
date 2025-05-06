import React from 'react';
import './footer.css';
import Footerimg from '../../assets/stonex-logo.png'
<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

function Footer() {
  return (
    <div className="main-wrap">
      <footer className="footer">
        <div className="footer-left">
          <img src={Footerimg}/>
        </div>

        <div className="footer-middle">
          <h4 className='contact'><i className="fas fa-user"></i> Contact</h4>
          <ul>
            <li><i className="fas fa-phone"></i> +91 999-999-9999</li>
            <li><i className="fab fa-whatsapp"></i> +91 999-999-9999</li>
            <li><i className="fas fa-envelope"></i> stonexroofing@gmail.com</li>
            <li><i className="fab fa-instagram"></i> @stonexroofing</li>
            <li><i className="fab fa-facebook"></i> @stonexroofing</li>
          </ul>
        </div>

        <div className="footer-right">
          <h4><i className="fas fa-map-marker-alt"></i> Locations</h4>
          <div className="map-placeholder">
          <iframe
      title="StoneX Roofing Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196900090376!2d-122.41941518468113!3d37.774929779759774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b8e9d0c5%3A0x4b4a8f5dfd89d5f6!2sStoneX%20Roofing!5e0!3m2!1sen!2sus!4v1618325700421!5m2!1sen!2sus"
      width="100%"
      height="180"
      style={{ 
        border: 0, 
        borderRadius: '8px'
      }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
          </div>
          <button className="quote-btn">GET A QUOTE</button>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>Copyright © 2025, All Rights To <a href="#">StoneX Roofing Solutions</a></p>
      </div>
    </div>
  );
}

export default Footer;
