import * as React from "react";
import Svg, { SvgProps, Mask, Rect, G, Path } from "react-native-svg";
const Avatar2 = (props: SvgProps) => (
  <Svg width={80} height={80} fill="none" viewBox="0 0 36 36" {...props}>
    <Mask id="a" width={36} height={36} x={0} y={0} maskUnits="userSpaceOnUse">
      <Rect width={36} height={36} fill="#FFF" rx={72} />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#65727a" d="M0 0h36v36H0z" />
      <Rect
        width={36}
        height={36}
        fill="#d7dacf"
        rx={36}
        transform="rotate(-59 23.919 17.849) scale(1.1)"
      />
      <G fill="#000" transform="rotate(-1 187.383 305.972)">
        <Path d="M13 20a1 .75 0 0 0 10 0" />
        <Rect width={1.5} height={2} x={13} y={14} rx={1} />
        <Rect width={1.5} height={2} x={21} y={14} rx={1} />
      </G>
    </G>
  </Svg>
);
export default Avatar2;
