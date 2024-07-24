import * as React from "react";
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const EyeOff = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Defs>
      <ClipPath id="clip-eye-off">
        <Path d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
    <G id="eye-off">
      <G id="Group_2038" data-name="Group 2038">
        <G
          id="eye-off-2"
          data-name="eye-off"
          transform="translate(2.333 2.334)"
        >
          <Path
            id="Path_6303"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.451 14.451a8.112 8.112 0 0 1-4.785 1.659c-5.638.001-8.86-6.444-8.86-6.444a14.862 14.862 0 0 1 4.076-4.784m3.093-1.467a7.347 7.347 0 0 1 1.692-.193c5.639 0 8.861 6.444 8.861 6.444a14.9 14.9 0 0 1-1.74 2.57m-5.413-.862a2.417 2.417 0 1 1-3.416-3.415"
            data-name="Path 6303"
          />
          <Path
            id="Line_322"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m0 0 17.722 17.722"
            data-name="Line 322"
            transform="translate(.806 .806)"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default EyeOff;
