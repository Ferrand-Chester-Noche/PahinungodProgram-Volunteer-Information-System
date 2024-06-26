import React from 'react';
import './landing.css';

const Landing = () => {
  return (
    <div className='background'>
      <div className='content'>
        <h1 className='title'>Be a PAHINUNGOD</h1>
        <p className='subtitle'>Join the movement and re-imagine the world through volunteerism and radical change.</p>
        <div>
          <button className='volunteer-buttons'>Be a Volunteer</button>
          <button className='volunteer-buttons'>Be a Sponsor/Partner</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
