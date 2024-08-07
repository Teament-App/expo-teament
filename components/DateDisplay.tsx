import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { FormatDateToDisplay } from "@/utils/translators";

export default function DateDisplay({
  startDate,
  endDate,
}: {
  startDate?: Date;
  endDate?: Date;
}) {
  if (!endDate) {
    return (
      <ThemedView>
        <ThemedText>Sin fecha añadida</ThemedText>
      </ThemedView>
    );
  }
  return (
    <ThemedView>
      <ThemedText>{FormatDateToDisplay(endDate, startDate)}</ThemedText>
    </ThemedView>
  );
}
