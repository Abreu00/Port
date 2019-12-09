import { useEffect } from "react";

export default function ScrollTop({ location, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}
