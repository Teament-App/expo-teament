import * as React from "react";
import Svg, { G, Defs, ClipPath, Path } from "react-native-svg";

const FlagSvg = React.forwardRef((props: any, ref) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G fill={props?.stroke || "#212121"} className="nc-icon-wrapper">
        <Defs>
          <ClipPath id="a">
            <Path d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
        <G data-name="Group 2050" className="" clipPath="url(#a)">
          <G data-name="flag">
            <Path
              data-name="Path 6322"
              d="M3.636 13.636s.909-.909 3.636-.909 4.545 1.818 7.273 1.818 3.636-.909 3.636-.909V2.727s-.909.909-3.636.909S10 1.818 7.273 1.818s-3.636.909-3.636.909z"
              fill="none"
              stroke={props?.stroke || "#212121"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5px"
              transform="translate(1.091 1.091)"
            />
            <Path
              data-name="Line 337"
              d="M3.636 20v-6.364"
              fill="none"
              stroke={props?.stroke || "#212121"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5px"
              transform="translate(1.091 1.091)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
});

export default FlagSvg;
