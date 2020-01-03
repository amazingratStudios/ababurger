import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "1rem",
  className = "",
  viewBox = "0 0 192 192"
}) => (
  <svg
    width={width + "rem"}
    style={{display:"block"}}
    height={width + "rem"}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill} 
      d="m189.382 106.081-88-80a8 8 0 0 0 -10.763 0l-88 80a8 8 0 0 0 5.381 13.919h16v64a8 8 0 0 0 8 8h40v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v56h40a8 8 0 0 0 8-8v-64h16a8 8 0 0 0 5.382-13.919zm-69.382-2.081h-48v-16h48zm0-24h-48v-16h48z"/>
    </svg>
);

export default SVG;
