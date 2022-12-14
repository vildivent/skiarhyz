import { useState, useEffect } from "react";

const useNavbarOnScroll = () => {
  const hideIndent = 80;
  const [isBrowser, setIsBrowser] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [transparentStyle, setTransparentStyle] = useState(true);

  useEffect(() => {
    setIsBrowser(true);
    if (isBrowser) {
      if (window.scrollY > hideIndent) setTransparentStyle(false);
      else setTransparentStyle(true);
    }
  }, [isBrowser]);

  useEffect(() => {
    const controlNavbar = () => {
      if (isBrowser) {
        if (window.scrollY > lastScrollY && window.scrollY > hideIndent)
          setShowNavbar(false); // if scroll down hide the navbar
        else setShowNavbar(true); // if scroll up show the navbar

        if (window.scrollY > hideIndent) setTransparentStyle(false);
        else setTransparentStyle(true);

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (isBrowser) {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [isBrowser, lastScrollY]);

  return { showNavbar, transparentStyle };
};

export default useNavbarOnScroll;
