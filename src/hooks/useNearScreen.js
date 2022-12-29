const { useRef, useState, useEffect } = require('react');

const useNearScreen = ({ distance = '100px', externalRef, once = true } = {}) => {
  const fromRef = useRef();
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    element && observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
};

export default useNearScreen;
