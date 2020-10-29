import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="container">
      <div className="container-inner text">
        <h1 className="text">Welcome to Alchemy</h1>
        <h2>Drop a picture in and see what it turns into...</h2>
        <Link to="/start" className="btn btn-primary">
          Let's Begin
        </Link>
      </div>
    </div>
  );
};

export default Landing;
