import React from "react";

export default function Demo({ demoOn }) {
  const demoHidden = {
    color: "crimson",
    position: "fixed",
    fontSize: "20vw",
    top: "50%",
    left: "50%",
    transform: "rotate(45deg) translate(-50%,-95%)",
    transition: "all 0.3s",
    zIndex: "-4",
    opacity: "0",
  };

  const demoShown = {
    ...demoHidden,
    zIndex: "4",
    opacity: "1",
  };
  return (
    <h1 id="demo" style={demoOn ? demoShown : demoHidden}>
      DEMO
    </h1>
  );
}
