import { useEffect, useState } from "react";

export const useKeyDown = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    const setFromEvent = e => {
      setKey(e.key);
    };
    window.addEventListener("keydown", setFromEvent);

    return () => {
      window.removeEventListener("keydown", setFromEvent);
    };
  }, []);

  return key;
};
