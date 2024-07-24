import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const CalendarSvg = React.forwardRef((props: any, ref) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Defs>
        <ClipPath id="clip-Calendar">
          <Path d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
      <G id="Calendar" clipPath="url(#clip-Calendar)">
        <G id="Group_1978" data-name="Group 1978">
          <G
            id="calendar-2"
            data-name="calendar"
            transform="translate(1.091 1.091)"
          >
            <Rect
              id="Rectangle_824"
              data-name="Rectangle 824"
              width={16.364}
              height={16.364}
              rx={1.818}
              fill="none"
              stroke="#000"
              strokeWidth="1.5px"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(2.727 3.636)"
            />
            <Path
              id="Line_266"
              fill="none"
              stroke="#000"
              strokeWidth="1.5px"
              data-name="Line 266"
              transform="translate(14.545 1.818)"
              d="M0 0L0 3.636"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Line_267"
              fill="none"
              stroke="#000"
              strokeWidth="1.5px"
              data-name="Line 267"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(7.273 1.818)"
              d="M0 0L0 3.636"
            />
            <Path
              id="Line_268"
              fill="none"
              stroke="#000"
              strokeWidth="1.5px"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-name="Line 268"
              transform="translate(2.727 9.091)"
              d="M0 0L16.364 0"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
});

export default CalendarSvg;
