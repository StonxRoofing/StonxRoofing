import React from 'react';
import whystoneximg from '../../assets/whystone-page-img.png';
import structure from '../../assets/structure.png';
import picsque from '../../assets/icons/picsque.png';
import lightweight from '../../assets/icons/lightweight.png';
import windresis from '../../assets/icons/windresis.png';
import durable from '../../assets/icons/durable.png';
import perfectach from '../../assets/icons/perfectach.png';
import allweather from '../../assets/icons/allweather.png';
import firesafty from '../../assets/icons/firesafty.png';
import calm from '../../assets/icons/calm.png';

import './Whystonex.css';

const WhyStoneX = () => {
  return (
    <div className="whystonex-container">
      <img src={whystoneximg} alt="StoneX Background" className="whystoneximg" />
      <div className="whystonex-content">
        <h1>Why StoneX ?</h1>
        <p>
          At StoneX, we specialize in premium stone coated steel roofing solutions that blend timeless aesthetics with unmatched durability. <br />
          With a commitment to quality, innovation, and customer satisfaction, we deliver roofing systems that stand the test of time—resistant to harsh weather,
          fire, corrosion, and fading. Our expert team works closely with homeowners, contractors, and developers to provide stylish,
          low-maintenance roofing options that enhance curb appeal and long-term value. <br />
          Whether you're building new or replacing an old roof, trust StoneX to protect what matters most—with strength, style, and superior performance.
        </p>

        <h2 className="structure-heading">Structure</h2>
        <div className="structure-section">
          <img src={structure} alt="Structure Diagram" className="structure-image" />
          <ul className="structure-list">
            <li>1. Transparent acrylic varnish – contributes to self-cleaning from dust during rain</li>
            <li>2. Colored stone granules – protects from mechanical damage and creates an outstanding appearance</li>
            <li>3. Acrylic primer – provides adhesion of stone granules</li>
            <li>4. Protective coating – serves as an additional anti-corrosion protection</li>
            <li>5. Aluzinc (AZ -150 gsm) layer – preserves the steel layer from corrosion</li>
            <li>6. High-quality steel sheet – provides strength and rigidity</li>
            <li>7. Aluzinc (AZ -150 gsm) layer – again for corrosion protection</li>
            <li>8. Protective coating – additional anti-corrosion protection</li>
          </ul>
        </div>

        <h2 className="structure-heading">Advantages</h2>
        <div className="features-grid">
          <Feature icon={picsque} title="Picturesque Roofing" description="The true beauty of natural stone and noble colors embodied in a time-honoured form will definitely distinguish your home among all others." />
          <Feature icon={lightweight} title="Lightweight" description="Only 6 kg/m² – seven times lighter than clay tiles. Results in lower load and greater safety." />
          <Feature icon={windresis} title="Wind Resistance" description="Interlocking panel system offers resistance to wind uplift of up to 230 km/h. Be storm-ready." />
          <Feature icon={durable} title="Durability" description="Metal and stone grant strength. Stone granules preserve surface for decades." />
          <Feature icon={perfectach} title="Perfect for Any Architectural Style" description="StoneX’s types and colors complement any architectural design, from mansions to villas." />
          <Feature icon={allweather} title="All-Weather" description="Resistant to temperature changes. Use in any climate, from freezing to scorching." />
          <Feature icon={firesafty} title="Fire Safety" description="Does not burn or spread flames. A safe roofing solution." />
          <Feature icon={calm} title="Keeps Your Home Quiet" description="Material structure reduces rain and wind noise. Enjoy peace of mind." />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="feature-card">
    <img src={icon} alt={title} />
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default WhyStoneX;
