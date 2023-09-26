import { useState } from 'react';

export const useDynamicCarousel = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  //sets and tracks the current card being shown
  const handleCarouselAfterChange = (current: number) => {
    setActiveCardIndex(current);
  };

  return { activeCardIndex, handleCarouselAfterChange };
};
