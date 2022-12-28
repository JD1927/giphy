const { useRef, useState, useEffect } = require('react');

const useNearScreen = ({ distance = '100px' } = {}) => {
  const fromRef = useRef();
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
};

export default useNearScreen;