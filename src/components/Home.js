import React from 'react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <section className='index-banner home'>
        <div className='vertical-center'>
          <h2>Sayaka Ono</h2>
          <h1>Web Developer</h1>
          <p>Vancouver</p>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
