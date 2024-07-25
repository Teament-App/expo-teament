import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { commonColors } from "@/constants/Colors";
import { imageUtil } from "@/utils/image.util";
import { SvgUri } from "react-native-svg";

export default function File({
  authorId,
  authorName,
  filePath,
  project,
}: {
  authorId: number;
  authorName: string;
  filePath: string;
  project: string;
}) {
  return (
    <View style={[styles.fileContainer]}>
      <ThemedText style={{ fontSize: 12 }}>{filePath}</ThemedText>
      <SvgUri width={20} uri={imageUtil.getSvg("trash-red.svg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  fileContainer: {
    height: 40,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: commonColors.gray_1,
    marginBottom: 8,
  },
});
