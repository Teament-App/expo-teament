import React, { useEffect, useState } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../ThemedView";
import { commonColors } from "@/constants/Colors";
import { Text } from "@ui-kitten/components";
import FlagSvg from "../svg/FlagsSvg";
import { ThemedText } from "../ThemedText";

const Priority = ({ priority, title = true, onChange }: any) => {
  const theme = useColorScheme();
  const styles = modalStyles(`${theme}`);
  const [localPriority, setLocalPriority] = useState(priority);

  const changePriority = (value: string) => () =>
    onChange(value) || setLocalPriority(value);

  return (
    <ThemedView style={[{ width: "100%", flex: 1, padding: 24 }]}>
      <SafeAreaView style={[{ width: "100%" }, styles.optionsContainer]}>
        {title && <ThemedText style={[styles.title]}>Prioridad</ThemedText>}
        <TouchableOpacity
          onPress={changePriority("Low")}
          style={[
            styles.priorityContainer,
            styles.priorityLow,
            localPriority === "Low" && styles.priorityLowSelected,
          ]}
        >
          <View>
            <FlagSvg stroke={commonColors.green} />
            <ThemedText>Baja</ThemedText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changePriority("Medium")}
          style={[
            styles.priorityContainer,
            styles.priorityMedium,
            localPriority === "Medium" && styles.priorityMediumSelected,
          ]}
        >
          <View>
            <FlagSvg stroke={commonColors.yellow} />
            <ThemedText>Media</ThemedText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changePriority("High")}
          style={[
            styles.priorityContainer,
            styles.priorityHigh,
            localPriority === "High" && styles.priorityHighSelected,
          ]}
        >
          <View>
            <FlagSvg stroke={commonColors.red} />
            <ThemedText>Alta</ThemedText>
          </View>
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
