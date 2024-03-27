// ./src/app/Home.tsx

import React from 'react';
import Hero from './hero/page';
import NextJsSlider from './NextJsSlider/page';

export default function Home() {
  return (
    <div className="container p-20">
      <Hero />
      <NextJsSlider />
    </div>
  );
}
