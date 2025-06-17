// import React from "react";
import "./styles.css"
interface Props {
    children : string
}

export const DarkMode = ({ children } : Props) => {
  return <div className="dark-mode">{children}</div>;
};
