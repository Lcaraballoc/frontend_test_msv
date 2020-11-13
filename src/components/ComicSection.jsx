import React, { useState, useEffect } from 'react';
import getRandomInt from '../Utils/getRandomInt';

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
    <div className="Comic">
      <div className="Comic__container">
        <h1>{state.comic.title}</h1>
        <figure>
          <img src={state.comic.img} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ComicSection;
