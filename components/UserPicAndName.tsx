import React from "react";
import { Image, StyleSheet, Text, TextStyle, View } from "react-native";
import { FontSizes, FontSizesType } from "@/constants/GeneralStyles";
import { Avatar } from "@ui-kitten/components";
import { ThemedText } from "./ThemedText";

const UserPicAndName = ({
  image_url,
  userName,
  position = "center",
  textSize = "base",
  bold = false,
}: {
  image_url?: string;
  userName?: string;
  position?: string;
  bold?: boolean;
  textSize?: FontSizesType;
}) => {
  const styles = getStyles(position, textSize, bold);
  return (
    <View style={[styles?.container]}>
      <Avatar
        size="giant"
        source={{
          uri: image_url || `https://cdn.verkian.com/resources/avatar_1.png`,
        }}
      />
      <ThemedText style={[styles?.name]}>{userName}</ThemedText>
    </View>
  );
};

export default UserPicAndName;

const getStyles = (
  placement: string,
  fontSize: FontSizesType,
  bold: boolean
) => {
  const name: TextStyle = {
    fontSize: FontSizes[fontSize],
    ...(bold ? { fontWeight: "700" } : {}),
    marginTop: 16,
  };
  if (placement === "center") {
    return StyleSheet.create({
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      name,
    });
  }
};
