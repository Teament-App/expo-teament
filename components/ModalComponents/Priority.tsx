import React, { useEffect, useState } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../ThemedView";
import { commonColors } from "@/constants/Colors";
import { Text } from "@ui-kitten/components";
import FlagSvg from "../svg/FlagsSvg";

const Priority = ({ priority, title = true, onChange }: any) => {
  const theme = useColorScheme();
  const styles = modalStyles(`${theme}`);
  const [localPriority, setLocalPriority] = useState(priority);

  const changePriority = (value: string) => () =>
    onChange(value) || setLocalPriority(value);

  return (
    <ThemedView style={[{ width: "100%", flex: 1, padding: 24 }]}>
      <SafeAreaView style={[{ width: "100%" }, styles.optionsContainer]}>
        {title && <Text style={[styles.title]}>Prioridad</Text>}
        <TouchableOpacity
          onPress={changePriority("Low")}
          style={[
            styles.priorityContainer,
            styles.priorityLow,
            localPriority === "Low" && styles.priorityLowSelected,
          ]}
        >
          <FlagSvg stroke={commonColors.green} />
          <Text>Baja</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changePriority("Medium")}
          style={[
            styles.priorityContainer,
            styles.priorityMedium,
            localPriority === "Medium" && styles.priorityMediumSelected,
          ]}
        >
          <FlagSvg stroke={commonColors.yellow} />
          <Text>Media</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changePriority("High")}
          style={[
            styles.priorityContainer,
            styles.priorityHigh,
            localPriority === "High" && styles.priorityHighSelected,
          ]}
        >
          <FlagSvg stroke={commonColors.red} />
          <Text>Alta</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ThemedView>
  );
};

export default Priority;

const modalStyles = (theme: string) =>
  StyleSheet.create({
    optionsContainer: {
      display: "flex",
      height: "100%",
      gap: 8,
    },
    title: {
      fontWeight: "700",
      fontSize: 18,
      marginBottom: 16,
      marginTop: -42,
    },
    priorityContainer: {
      display: "flex",
      gap: 8,
      borderRadius: 5,
      borderWidth: 1,
      width: "100%",
      flexDirection: "row",
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignItems: "center",
    },
    priorityLow: {
      borderColor: commonColors.green,
    },
    priorityLowSelected: {
      backgroundColor: `${commonColors?.green}25`,
    },
    priorityMedium: {
      borderColor: commonColors.yellow,
    },
    priorityHigh: {
      borderColor: commonColors.red,
    },
    priorityMediumSelected: {
      backgroundColor: `${commonColors?.yellow}25`,
    },
    priorityHighSelected: {
      backgroundColor: `${commonColors?.red}25`,
    },
  });
