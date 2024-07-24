import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Colors, ColorsInterface } from "@/constants/Colors";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { useSharedValue, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("screen");

function clamp(val: any, min: any, max: any) {
  return Math.min(Math.max(val, min), max);
}

export default function ProjectSectionContainer({ children }: any) {
  const styles = getStyles("light");
  const translateX = useSharedValue(0);
  const startTranslateX = useSharedValue(0);

  const gesture = Gesture.Fling()
    .direction(Directions.LEFT || Directions.RIGHT)
    .onBegin((event) => {
      startTranslateX.value = event.x;
    })
    .onStart((event) => {
      translateX.value = withTiming(
        clamp(
          translateX.value + event.x - startTranslateX.value,
          width / -2 + 50,
          width / 2 - 50
        ),
        { duration: 200 }
      );
    })
    .runOnJS(true);
  return <View style={[styles.container]}>{children}</View>;
}

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      padding: 12,
      borderRadius: 6,
      backgroundColor: Colors[theme as keyof ColorsInterface].background,
      shadowColor: "rgba(61, 75, 92, 1)", // The color without the alpha value
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 6, // This is to provide shadow on Android
    },
  });
