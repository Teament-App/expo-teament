import * as React from "react";
import Svg, { SvgProps, Mask, Rect, G, Path } from "react-native-svg";
const Avatar1 = (props: SvgProps) => (
  <Svg width={80} height={80} fill="none" viewBox="0 0 36 36" {...props}>
    <Mask id="a" width={36} height={36} x={0} y={0} maskUnits="userSpaceOnUse">
      <Rect width={36} height={36} fill="#FFF" rx={72} />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#8f9a9c" d="M0 0h36v36H0z" />
      <Rect
        width={36}
        height={36}
        fill="#e6e8e3"
        rx={36}
        transform="rotate(-20 31.343 8.657) scale(1.1)"
      />
      <G transform="translate(-4 -1)">
        <Path stroke="#000" strokeLinecap="round" d="M15 20c2 1 4 1 6 0" />
        <Rect width={1.5} height={2} x={14} y={14} fill="#000" rx={1} />
        <Rect width={1.5} height={2} x={20} y={14} fill="#000" rx={1} />
      </G>
    </G>
  </Svg>
);
export default Avatar1;
