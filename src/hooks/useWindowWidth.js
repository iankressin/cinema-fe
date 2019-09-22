import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [screenWidth, setScreenWidth] = useState();

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => getSizeScreenCode(), [width]);

  const getSizeScreenCode = () => {
    if (width >= 1200) {
      setScreenWidth("lg");
    }

    if (width < 1200 && width >= 768) {
      setScreenWidth("md");
    }

    if (width < 768 && width >= 576) {
      setScreenWidth("sm");
    }

    if (width < 576) {
      setScreenWidth("xs");
    }
  
  
  }
  return screenWidth;
};

export default useWindowWidth;
