import React from "react";
import { View } from "react-native";
import { Avatar, Text } from "@ui-kitten/components";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
const TaskUsers = ({
  mainUser,
  totalUsers,
}: {
  mainUser?: string;
  totalUsers: number;
}) => {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          position: "relative",
        },
      ]}
    >
      <Avatar
        source={{
          uri: mainUser || "https://cdn.verkian.com/resources/avatar_1.png",
        }}
        size="tiny"
        shape="round"
      />
      {totalUsers > 1 && (
        <View
          style={[
            {
              width: 14,
              borderRadius: 8,
              height: 14,
              backgroundColor: Colors.light.secAction,
              position: "absolute",
              top: -4,
              right: -7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 1,
            },
          ]}
        >
          <ThemedText
            style={[
              {
                fontSize: 10,
                fontWeight: "700",
              },
            ]}
          >
            {totalUsers}
          </ThemedText>
        </View>
      )}
    </View>
  );
};

export default TaskUsers;
