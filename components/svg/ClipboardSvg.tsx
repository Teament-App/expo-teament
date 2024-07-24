import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function ClipboardSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Defs>
        <ClipPath id="clip-Clipboard">
          <Path d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
      <G id="Clipboard" clipPath="url(#clip-Clipboard)">
        <G id="Group_1995" data-name="Group 1995">
          <G
            id="clipboard-2"
            data-name="clipboard"
            transform="translate(1.091 1.091)"
          >
            <Path
              id="Path_6248"
              data-name="Path 6248"
              fill="none"
              stroke={props?.stroke || "#000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14.545 3.636h1.818a1.818 1.818 0 011.818 1.818v12.728A1.818 1.818 0 0116.364 20H5.455a1.818 1.818 0 01-1.818-1.818V5.455a1.818 1.818 0 011.818-1.819h1.818"
            />
            <Rect
              id="Rectangle_825"
              data-name="Rectangle 825"
              fill="none"
              stroke={props?.stroke || "#000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              width={7.273}
              height={3.636}
              rx={0.909}
              transform="translate(7.273 1.818)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default ClipboardSvg;
