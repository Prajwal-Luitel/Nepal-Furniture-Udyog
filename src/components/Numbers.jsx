import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

function StatsCounter({ label, count, startAnimation }) {
  const controls = useAnimation();
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (startAnimation) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });

      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * count);
        setDisplayCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [controls, count, startAnimation]);

  return (
    <motion.div
      className="flex flex-col items-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <motion.h3
        className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayCount}+
      </motion.h3>
      <p className="text-sm sm:text-base font-medium text-gray-700">{label}</p>
    </motion.div>
  );
}

function Numbers() {
  const statsData = [
    { label: "Years in Business", count: 10 },
    { label: "Satisfied Clients", count: 500 },
    { label: "Product Sales", count: 1200 },
    { label: "Outlets", count: 3 },
  ];

  const [animationStarted, setAnimationStarted] = useState(false);
  const numbersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = numbersRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-8 bg-[#f9f6f2]" ref={numbersRef}>
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {statsData.map((stat) => (
            <StatsCounter
              key={stat.label}
              label={stat.label}
              count={stat.count}
              startAnimation={animationStarted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

StatsCounter.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  startAnimation: PropTypes.bool.isRequired,
};

export default Numbers;
