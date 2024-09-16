import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const id = window.location.hash.substring(1);
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
};

export default useSmoothScroll;
