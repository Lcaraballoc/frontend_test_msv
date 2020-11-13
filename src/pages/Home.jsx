import React from 'react';
import Header from '../components/Header';
import ComicSection from '../components/ComicSection';
import BackgroundImage from '../assets/boom_image.png';
import './styles/Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <ComicSection />
      <img className="backgroundImg" src={BackgroundImage} alt="" />
      <img className="backgroundImg2" src={BackgroundImage} alt="" />
    </>
  );
};

export default Home;
