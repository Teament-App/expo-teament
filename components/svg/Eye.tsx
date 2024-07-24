import * as React from "react";
import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Path,
  G,
  Circle,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Eye = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Defs>
      <ClipPath id="clip-eye">
        <Path d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
    <G id="eye">
      <G id="Group_2039" data-name="Group 2039">
        <G id="eye-2" data-name="eye" transform="translate(2 2)">
          <Path
            id="Path_6304"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M.833 10S4.167 3.333 10 3.333 19.167 10 19.167 10 15.833 16.667 10 16.667.833 10 .833 10Z"
            data-name="Path 6304"
          />
          <Circle
            id="Ellipse_583"
            cx={2.5}
            cy={2.5}
            r={2.5}
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            data-name="Ellipse 583"
            transform="translate(7.5 7.5)"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default Eye;
