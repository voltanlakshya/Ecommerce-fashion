import React, { useEffect, useState, useRef } from 'react';

const slides = [
  {
    id: 1,
    title: 'Winter Sale',
    subtitle: 'Up to 50% off',
    img: "/src/assets/images/product_files/b4.jpg", 
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Fresh styles every week',
    img: '/src/assets/images/product_files/b18.jpg',
  },
  {
    id: 3,
    title: 'Trending Now',
    subtitle: 'Best picks for you',
    img: '/src/assets/images/product_files/b20.jpg',
  },
];

function HeroSlider({ interval = 2000 }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i) => setIdx(i);

  useEffect(() => {
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [interval]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, interval);
  };

  return (
    <div className="heroSlider" onMouseEnter={pause} onMouseLeave={resume}>
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`heroSlide ${i === idx ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.img})` }}
          aria-hidden={i !== idx}
        >
          <div className="heroOverlay">
            <h2>{s.title}</h2>
            <p>{s.subtitle}</p>
            <button className="heroCta">Shop Now</button>
          </div>
        </div>
      ))}

      <button className="heroArrow prev" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="heroArrow next" onClick={next} aria-label="Next slide">›</button>

      <div className="heroDots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`heroDot ${i === idx ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;