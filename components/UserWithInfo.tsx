import React from "react";
import { Image, StyleSheet, Text, TextStyle, View } from "react-native";
import { FontSizes, FontSizesType } from "@/constants/GeneralStyles";
import { Avatar } from "@ui-kitten/components";
import { commonColors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import {
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const UserWithInfo = ({
  image_url,
  userName,
  job = "Sin puesto asignado",
  position = "center",
  textSize = "base",
  bold = false,
  selected = false,
}: {
  image_url?: string;
  userName?: string;
  position?: string;
  bold?: boolean;
  textSize?: FontSizesType;
  job?: string;
  selected?: boolean;
}) => {
  const styles = getStyles(position, textSize, bold);
  return (
    <View
      style={[
        styles?.container,
        {
          ...(selected ? { backgroundColor: "#C6E4F9" } : {}),
        },
      ]}
    >
      <Avatar
        size="medium"
        source={{
          uri: image_url || `https://cdn.verkian.com/resources/avatar_1.png`,
        }}
      />
      <View
        style={{
          display: "flex",
          gap: 0,
        }}
      >
        <ThemedText
          type="title"
          style={[
            styles?.name,
            {
              fontFamily: "Montserrat_500Medium",
              fontSize: FontSizes["md"],
              marginBottom: 0,
              lineHeight: 0,
            },
          ]}
        >
          {userName}
        </ThemedText>
        <ThemedText
          type="default"
          style={[
            styles?.name,
            {
              fontFamily: "Montserrat_500Medium",
              fontSize: FontSizes["xs"],
              lineHeight: 0,
              color: "#757575",
            },
          ]}
        >
          {job || "Sin puesto asignado"}
        </ThemedText>
      </View>
    </View>
  );
};

export default UserWithInfo;

const getStyles = (
  placement: string,
  fontSize: FontSizesType,
  bold: boolean
) => {
  const name: TextStyle = {
    fontSize: FontSizes[fontSize],
  };
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      gap: 6,
      padding: 12,
    },
    name,
  });
};
