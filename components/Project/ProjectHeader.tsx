import { Avatar } from "@ui-kitten/components";
import React, { useState } from "react";
import { ThemedView } from "../ThemedView";
import { Image, StyleSheet, Touchable, View } from "react-native";
import { Colors, ColorsInterface } from "@/constants/Colors";
import { BackAction } from "../BackAction";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditProjectModal from "../Modal/EditProjectModal";
import { ThemedText } from "../ThemedText";

export default function ProjectHeader({
  color = Colors.dark.primary,
  projectName,
  members,
  id,
}: {
  projectName: string;
  color: string;
  members: any[];
  id: number;
}) {
  const [visibleModal, setVisibleModal] = useState(false);
  const styles = getStyles("light");
  return (
    <ThemedView style={[styles.projectHeader, { backgroundColor: color }]}>
      {visibleModal && (
        <EditProjectModal
          id={id}
          color={color}
          projectName={projectName}
          visible={visibleModal}
          toggleVisibility={() => setVisibleModal((prev) => !prev)}
        />
      )}
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <BackAction />
        <ThemedText style={styles.projectText}>{projectName}</ThemedText>
        <TouchableOpacity onPress={() => setVisibleModal((prev) => !prev)}>
          <View>
            <Image
              source={{
                uri: "https://cdn.verkian.com/resources/edit-1.png",
              }}
              style={{
                marginLeft: 12,
                width: 20,
                height: 20,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        {members?.map(({ image_url }) => (
          <Avatar
            source={{
              uri:
                image_url || "https://cdn.verkian.com/resources/avatar_1.png",
            }}
            size="tiny"
            shape="round"
          />
        ))}
      </View>
    </ThemedView>
  );
}

const getStyles = (theme: string) => {
  const fontColor = theme === "dark" ? "light" : "dark";
  return StyleSheet.create({
    projectHeader: {
      backgroundColor: Colors[theme as keyof ColorsInterface].primary,
      height: 60,
      paddingHorizontal: 6,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    projectText: {
      color: Colors[fontColor as keyof ColorsInterface].text,
    },
  });
};
