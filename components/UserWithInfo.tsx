import React from "react";
import { StyleSheet, TextStyle, TouchableOpacity, View } from "react-native";
import { FontSizes, FontSizesType } from "@/constants/GeneralStyles";
import { Avatar } from "@ui-kitten/components";
import { ThemedText } from "./ThemedText";

const UserWithInfo = ({
  image_url,
  userName,
  job = "Sin puesto asignado",
  position = "center",
  textSize = "base",
  bold = false,
  selected = false,
  onPress,
}: {
  image_url?: string;
  userName?: string;
  position?: string;
  bold?: boolean;
  textSize?: FontSizesType;
  job?: string;
  selected?: boolean;
  onPress?: () => void;
}) => {
  const styles = getStyles(position, textSize, bold);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles?.container,
        {
          ...(selected ? { backgroundColor: "#C6E4F9" } : {}),
        },
      ]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
        }}
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
            flexDirection: "column",
            gap: 0,
          }}
        >
          <ThemedText
            type="defaultSemiBold"
            style={{
              fontSize: FontSizes["md"],
              marginBottom: 0,
              lineHeight: 24,
            }}
          >
            {userName}
          </ThemedText>
          <ThemedText
            type="default"
            style={{
              fontFamily: "Montserrat_500Medium",
              fontSize: FontSizes["xs"],
              lineHeight: 12,
              color: "#757575",
            }}
          >
            {job || "Sin puesto asignado"}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
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
