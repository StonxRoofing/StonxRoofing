import React from 'react';
import whystoneximg from '../../assets/whystone-page-img.png' // Update this with your actual image path
import './Whystonex.css'
import productDetails from '../../assets/product-details.png'
import lightweight from '../../assets/icons/lightweight.png'
import windresis from '../../assets/icons/windresis.png'
import fireresis from '../../assets/icons/fireresis.png'
import lowlife from '../../assets/icons/lowlife.png'
import attractive from '../../assets/icons/attractive.png'


const WhyStoneX = () => {
    return (
      <div className="whystonex-container">
        <img src={whystoneximg} alt="StoneX Background" className="whystoneximg" />
  
        <div className="whystonex-content">
          <h1>Why StoneX ?</h1>
          <p>
            At StoneX, we specialize in premium stone coated steel roofing solutions that blend timeless aesthetics with unmatched durability. <br />
            With a commitment to quality, innovation, and customer satisfaction, we deliver roofing systems that stand the test of time—resistant to harsh weather, <br />
            fire, corrosion, and fading. Our expert team works closely with homeowners, contractors, and developers to provide stylish, <br />
            low-maintenance roofing options that enhance curb appeal and long-term value.  <br />
            Whether you're building new or replacing an old roof, trust StoneX to protect what matters most—with strength, style, and superior performance.
          </p>
  
          <div className="card-grid">
            <div className="card">
              <h2>Brand</h2>
              <p>
                StoneX is a brand of stone coated metal roof tile, we take the lead in the industry with our differentiated technology and experience.
                StoneX is produced by fully automatic stone coated metal roof tile production line, designed and manufactured by our own technology & know-how from South Korea.
                StoneX guarantees qualified stone coated metal roof tile to customers and we are confident when there is demand from our customers.
              </p>
            </div>
  
            <div className="card">
            <h2>Component Details</h2>
            <img src={productDetails} alt="Component Diagram" className="card-image" />
            <ol>
              <li>Acrylic Top Coat</li>
              <li>Stone Chip</li>
              <li>Acrylic Base Coat</li>
              <li>Organic Coat</li>
              <li>Al-Zn Coat</li>
              <li>Base Steel</li>
              <li>Al-Zn Coat</li>
              <li>Organic Coat</li>
            </ol>
          </div>

  
            <div className="card">
              <h2>High Performance</h2>
              <ul className="performance-list">
                    <li>
                    <img src={lightweight} alt="Light weight" />
                    <span><strong>Light weight:</strong> 1.4 lbs/sq.ft (6.85kg/m²), six times lighter than clay</span>
                    </li>
                    <li>
                    <img src={windresis} alt="Wind resistance" />
                    <span><strong>Wind resistance:</strong> Withstands 145 mph, interlocking panel system</span>
                    </li>
                    <li>
                    <img src={fireresis} alt="Fire resistance" />
                    <span><strong>Fire resistance:</strong> Certified nonflammable by Japanese standards</span>
                    </li>
                    <li>
                    <img src={lowlife} alt="Low life cycle cost" />
                    <span><strong>Low life cycle cost:</strong> No cracking, warping, or fading</span>
                    </li>
                    <li>
                    <img src={attractive} alt="Attractive appearance" />
                    <span><strong>Attractive appearance:</strong> Premium presentation for homeowners</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default WhyStoneX;
