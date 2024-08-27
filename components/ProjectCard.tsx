import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageComponent,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { GeneralStyles } from "@/constants/GeneralStyles";
import { Avatar } from "@ui-kitten/components";
import { Image } from "react-native-svg";
import { ThemedText } from "./ThemedText";

export type ProjectCardType = {
  id: number;
  color: string;
  companies_id: number;
  dead_line?: string;
  description?: string;
  members: {
    image_url?: string;
    job?: string;
    last_name?: string;
    name?: string;
    rol?: string;
    status: string;
    userId: number;
  }[];
  name: string;
  next_milestone?: any;
  next_task?: any;
  progress?: any;
  start_date?: any;
  status: string;
  total_progress?: number;
  your_progress?: number;
  stand_alone?: boolean;
};

export default function ProjectCard({
  name = "Título del proyecto",
  color,
  total_progress,
  members,
  stand_alone = false,
  id,
}: ProjectCardType) {
  const [completed] = useState(total_progress === 100);

  const goToProject = () => {
    router.push(`/(protected)/(project)/${id}`);
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: color },
        completed && styles.projectCompleted,
        stand_alone && {
          width: "95%",
          marginVertical: 4,
        },
      ]}
      onPress={goToProject}
    >
      <View>
        <ThemedText style={GeneralStyles.fontBold}>{name}</ThemedText>
        <View style={styles.projectCardArrangement}>
          <View style={[styles.projectMembers]}>
            {members?.map(({ image_url, userId }) => {
              const uri =
                image_url || `https://cdn.verkian.com/resources/avatar_1.png`;
              return (
                <Avatar
                  key={userId}
                  source={{
                    uri,
                  }}
                  size="tiny"
                  shape="round"
                />
              );
            })}
          </View>
          <View style={[GeneralStyles.flexCol, GeneralStyles.itemsEnd]}>
            <ThemedText style={[GeneralStyles.textXss]}>
              Progreso total
            </ThemedText>
            <ThemedText style={[GeneralStyles.fontBold]}>
              {`${total_progress}%`}
            </ThemedText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 100,
    borderColor: Colors.light.border1,
    borderWidth: 5,
    width: 280,
    padding: 12,
    marginHorizontal: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "#3D4B5C",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  projectCompleted: {
    backgroundColor: "#34be4425",
    borderColor: "#34be44",
    color: "#34be44",
  },
  projectMembers: {
    display: "flex",
    gap: -10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  projectCardArrangement: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
