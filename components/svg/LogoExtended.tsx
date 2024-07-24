import * as React from "react";
import { Image } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";
const LogoExtended = (props: SvgProps) => (
  <Image
    source={require("../../assets/images/verkian_logo.png")}
    style={{
      width: 200,
      height: 45,
      marginBottom: 32,
    }}
  />
);
export default LogoExtended;
