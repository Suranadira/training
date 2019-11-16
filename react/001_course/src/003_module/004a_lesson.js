import React, { useState, useEffect, Children, cloneElement } from "react";

export default props => {
  const [, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  // Add/remove windows resize event listener
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <>
      {Children.map(props.children, child => {
        return cloneElement(child, {
          styles: { background: "#90EE90" },
          key: child.props.name
        });
      })}
    </>
  );
};

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
