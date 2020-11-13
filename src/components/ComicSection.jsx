import React, { useState, useEffect } from 'react';
import getRandomInt from '../Utils/getRandomInt';
import StarRating from './StarRating';
import Loading from './Loading';
import './styles/ComicSection.scss';

const ComicSection = () => {
  const [state, setState] = useState({
    comic: {},
    loading: true,
    error: false,
  });

  const fetchComic = () => {
    fetch(`http://xkcd.com/${getRandomInt(1, 614)}/info.0.json`)
      .then(res => res.json())
      .then(data => {
        setState({
          comic: data,
          loading: false,
        });
      })
      .catch(err => {
        console.log(`Hubo un error: ${err}`);
        setState({
          loading: false,
          error: true,
        });
      });
  };

  useEffect(() => {
    fetchComic();
  }, []);

  return (
    <div className="comic">
      <div className="comic__container">
        <h1 className="comic__container__title">{state.comic.title}</h1>
        {state.loading === true ? (
          <Loading />
        ) : (
          <figure>
            <img
              className="comic__container__image"
              src={state.comic.img}
              alt=""
            />
          </figure>
        )}
        <StarRating />
      </div>
    </div>
  );
};

export default ComicSection;
