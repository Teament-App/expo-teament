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

const UserChip = ({
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
        size="small"
        source={{
          uri: image_url || `https://cdn.verkian.com/resources/avatar_1.png`,
        }}
      />
      <ThemedText
        type="title"
        style={[styles?.name, { fontFamily: "Montserrat_500Medium" }]}
      >
        {userName}
      </ThemedText>
    </View>
  );
};

export default UserChip;

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
      backgroundColor: commonColors.gray_1,
      padding: 4,
      borderRadius: 20,
      maxWidth: 110,
      borderWidth: 1,
      borderColor: "#d4d4d4",
    },
    name,
  });
};
