import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import { fontFamilyBold, fontFamilyRegular } from "@/utils/styles.util";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { LoadingIndicator } from "../LoadingIndicator";
import { ThemedText } from "../ThemedText";

export default function EditProjectModal({
  projectName = "",
  toggleVisibility,
  visible = true,
}: any) {
  const [isLoading, setLoading] = useState(false);
  const {
    control,
    formState: { isDirty },
    getValues,
  } = useForm({
    mode: "all",
  });

  const submit = () => {
    console.log("Guardar");
    const values = getValues();
    console.log("Valores: ", values);
    setLoading(true);
    // toggleVisibility();
  };
  console.log(isLoading);
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={toggleVisibility}
    >
      <Card style={{ width: 355 }} disabled={true}>
        <ThemedText style={{ fontSize: 16, fontFamily: fontFamilyBold }}>
          Editar proyecto
        </ThemedText>
        <View style={{ marginTop: 16, marginBottom: 16 }}>
          <FormInput
            label={"Nombre del proyecto"}
            size="large"
            style={[styles.input]}
            placeholder="Nombre de tu proyecto"
            control={control}
            name="name"
            defaultValue={projectName}
            autocapitalize="none"
            rules={{
              required: "Ingresa tu correo electrónico",
            }}
          />
        </View>
        <Button
          size="medium"
          disabled={!isDirty}
          style={{ marginBottom: 12 }}
          onPress={submit}
          appearance={isLoading ? "outline" : "primary"}
          {...(isLoading && { accessoryLeft: LoadingIndicator })}
        >
          <ThemedText>{isLoading ? "Guardando" : "Guardar"}</ThemedText>
        </Button>
        <Button
          size="medium"
          disabled={isLoading}
          appearance="outline"
          onPress={toggleVisibility}
        >
          Cancelar
        </Button>
        {/* <Text
          style={{
            marginTop: 16,
            textAlign: "center",
          }}
          onPress={logoutUser}
          status="primary"
        >
          Cancelar
        </Text> */}
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
    width: 250,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
});
