import { View, Text } from "react-native";
import React from "react";
import { CommonInputProps } from "./FormInput";
import { Datepicker, Input } from "@ui-kitten/components";
import { useController } from "react-hook-form";

export default function FormDateInput({
  name,
  label,
  rules,
  placeholder,
  control,
  style,
  accessoryRight,
  size = "large",
  secureTextEntry = false,
  defaultValue = "",
}: CommonInputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  const openCalendar = () => {
    console.log("Abriendo el calendario");
  };
  return (
    <Datepicker
      size={size}
      label={label}
      style={style}
      placeholder={placeholder}
      onFocus={openCalendar}
      onBlur={field.onBlur}
      accessoryRight={accessoryRight}
      // status={fieldState.error || fieldState.invalid ? "danger" : ""}
      caption={fieldState.error?.message}
      date={new Date(field.value)}
      initialVisibleDate={new Date(field.value)}
      max={new Date()}
      status="basic"
      min={new Date(1960, 1, 1)}
    />
  );
}
