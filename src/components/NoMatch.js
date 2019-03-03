import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const NoMatch = props => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Not Found | Sayaka Ono - Web Developer</title>
        <meta name='description' content='Page not found.' />
      </Helmet>
      <div className='wrapper no-match page'>
        <h2>Page not found</h2>
        <p>
          {props.language === 'en'
            ? 'Sorry, but what you are looking for could not be found.'
            : 'お探しのページが見つかりませんでした。'}
        </p>
        <Link to='/' className='button ui secondary'>
          Home
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NoMatch;
