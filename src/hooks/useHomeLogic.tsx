import { useEffect, useState } from 'react';

export const useHomeLogic = () => {
  const [loading, setloading] = useState<boolean>(true);
  //useEffect to simulate data downloading during the initial render to enhance the user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { loading };
};
