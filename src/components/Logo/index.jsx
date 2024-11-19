import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div>
      <Link to="/home">
        <img src="/assets/images/logo.png" alt="Logo" className="w-24 h-auto" />
      </Link>
    </div>
  );
};
