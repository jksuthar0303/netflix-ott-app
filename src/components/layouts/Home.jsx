import React from 'react';
import Carousel from './Carousel';
import slides from '../../db/Slides'
import MoviesCard from './MoviesCard';

export default function Home() {
 

  return (
    <div>
      <Carousel slides={slides} />
      <MoviesCard />
    </div>
  );
}
