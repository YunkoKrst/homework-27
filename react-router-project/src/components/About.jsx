
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>Це сторінка про нас</h2>
      <nav>
        <ul>
          <li><Link to="team">Наша команда</Link></li>
          <li><Link to="company">Про компанію</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;