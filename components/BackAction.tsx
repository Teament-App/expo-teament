import React from "react";
import {
  Icon,
  IconElement,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { useRouter } from "expo-router";

const BackIcon = (props: any): IconElement => (
  <Icon {...props} name="arrow-back" />
);

export const BackAction = (): React.ReactElement => {
  const router = useRouter();
  return <TopNavigationAction onPress={() => router.back()} icon={BackIcon} />;
};
