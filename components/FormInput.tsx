import React from "react";
import { Input } from "@ui-kitten/components";
import { useController, useFormContext } from "react-hook-form";
export type CommonInputProps = {
  name: string;
  label: string;
  rules?: any;
  placeholder: string;
  control?: any;
  style: any;
  accessoryRight?: any;
  size?: "large" | "small" | "medium" | "tiny";
  secureTextEntry?: boolean;
  defaultValue?: string;
  autocapitalize?: "none" | "words";
};
export default function FormInput({
  name,
  label,
  rules,
  placeholder,
  style,
  accessoryRight,
  size = "large",
  secureTextEntry = false,
  defaultValue = "",
  autocapitalize = "words",
}: CommonInputProps) {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  return (
    <Input
      size={size}
      label={label}
      style={style}
      placeholder={placeholder}
      onChangeText={(value: string) => field.onChange(value)}
      onBlur={field.onBlur}
      accessoryRight={accessoryRight}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autocapitalize}
      status={fieldState.error ? "danger" : "basic"}
      caption={fieldState.error?.message}
      value={field.value}
    />
  );
}
