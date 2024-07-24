import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

function CheckComplete({ stroke = "#b3b3b3", ...props }) {
  return (
    <Svg
      width={props?.width || 24}
      height={props?.height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Rect\xE1ngulo 3"
            fill={stroke}
            d="M0 0H24V24H0z"
            strokeWidth="1.5px"
          />
        </ClipPath>
      </Defs>
      <G data-name="Check circle">
        <G
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5px"
          data-name="Group 1982"
          clipPath="url(#a)"
        >
          <Path
            data-name="Path 6236"
            d="M19.629 9.886v.821a8.922 8.922 0 11-5.291-8.155"
            transform="translate(1.227 1.333)"
            strokeWidth="1.5px"
          />
          <Path
            data-name="Path 6237"
            d="M19.629 3.569L10.706 12.5 8.03 9.823"
            transform="translate(1.227 1.333)"
            strokeWidth="1.5px"
          />
        </G>
      </G>
    </Svg>
  );
}

export default CheckComplete;
