import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    setPrevLocation(location);
  }, [location]);

  // Animation de transition sur l'entrée et sortie de la page
  // const props = useSpring({
  //   opacity: 1,
  //   transform: "translateX(0)",
  //   from: { opacity: 1, transform: "translateX(100%)" },
  //   reset: location.pathname !== prevLocation.pathname,
  //   reverse: location.pathname === window.location.pathname, // assure l'animation au changement de page
//});

  return <animated.div>{children}</animated.div>;
};

export default AnimatedPage;
