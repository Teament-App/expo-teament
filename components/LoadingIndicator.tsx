import { StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ImageProps } from "react-native-svg";
import { Spinner } from "@ui-kitten/components";

export const LoadingIndicator = (props: any): React.ReactElement => (
  <View style={[styles.indicator]}>
    <Spinner size="small" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
