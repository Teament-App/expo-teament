import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import UserChip from "./UserChip";
import { commonColors } from "@/constants/Colors";
import { ManagerTaskType } from "@/types/Task.type";

export default function AddAnchor({
  toggle,
  data,
  label = "Teammates",
}: {
  toggle: () => void;
  data: ManagerTaskType[];
  label?: string;
}): React.ReactElement {
  return (
    <View>
      <ThemedText
        style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 12 }}
        type="defaultSemiBold"
      >
        {label}
      </ThemedText>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <TouchableOpacity
          onPress={toggle}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: 32,
            height: 32,
            backgroundColor: commonColors.orange,
            borderRadius: 16,
          }}
        >
          <Image
            source={{
              uri: "https://cdn.verkian.com/resources/add_plus.png",
            }}
            width={18}
            height={18}
          />
        </TouchableOpacity>
        {data?.map((elem: ManagerTaskType) => (
          <UserChip userName={elem?.name} textSize="md" />
        ))}
      </View>
    </View>
  );
}
