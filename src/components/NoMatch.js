import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const NoMatch = props => {
  return (
    <React.Fragment>
      <div className='wrapper no-match page'>
        <h2>Page not found</h2>
        <p>
          {props.language === 'en'
            ? 'Sorry, but what you are looking for could not be found.'
            : 'お探しのページが見つかりませんでした。'}
        </p>
        <Link to='/' class='button ui secondary'>
          Home
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NoMatch;
