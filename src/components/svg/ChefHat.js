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
    <g id="_01-hat" data-name="01-hat">
        <g id="Glyph">
            <path 
                fill={fill}
                d="m40 184a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-16h-112z"
            />
            <path 
                fill={fill}
                d="m149.776 40.346a56.011 56.011 0 0 0 -107.552 0 48 48 0 0 0 -2.224 94.987v24.667h24v-24h16v24h32v-24h16v24h24v-24.667a48 48 0 0 0 -2.224-94.987z"
            />
        </g>
    </g>
  </svg>
);

export default SVG;
