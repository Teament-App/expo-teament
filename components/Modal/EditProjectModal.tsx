import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card, Modal, Text } from "@ui-kitten/components";
import { fontFamilyBold, fontFamilyRegular } from "@/utils/styles.util";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { LoadingIndicator } from "../LoadingIndicator";
import { ThemedText } from "../ThemedText";
import ColorPicker from "../ColorPicker";
import { UPDATE_PROJECT } from "@/services/Projects.endpoints";
import { useQueryClient } from "react-query";

export default function EditProjectModal({
  projectName = "",
  toggleVisibility,
  visible = true,
  color,
  id,
}: any) {
  const queryClient = useQueryClient();
  const [isLoading, setLoading] = useState(false);
  const form = useForm({
    mode: "all",
  });

  const submit = async () => {
    try {
      const values = form.getValues();
      setLoading(true);
      // toggleVisibility();
      await UPDATE_PROJECT({ data: values, projectId: id });
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => {
          return queryKey[0] === "project";
        },
      });
      queryClient.invalidateQueries(["projects"]);
      toggleVisibility();
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={toggleVisibility}
    >
      <Card style={{ width: 355 }} disabled={true}>
        <FormProvider {...form}>
          <>
            <ThemedText style={{ fontSize: 16, fontFamily: fontFamilyBold }}>
              Editar proyecto
            </ThemedText>
            <View style={{ marginTop: 16, marginBottom: 0 }}>
              <FormInput
                label={"Nombre del proyecto"}
                size="large"
                style={[styles.input]}
                placeholder="Nombre de tu proyecto"
                name="name"
                defaultValue={projectName}
                autocapitalize="none"
                rules={{
                  required: "Ingresa tu correo electrónico",
                }}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <ColorPicker value={color} name="color" />
            </View>
            <Button
              size="small"
              disabled={!form.formState.isDirty}
              style={{ marginBottom: 12 }}
              onPress={submit}
              appearance={isLoading ? "outline" : "primary"}
              {...(isLoading && { accessoryLeft: LoadingIndicator })}
            >
              <ThemedText>{isLoading ? "Guardando" : "Guardar"}</ThemedText>
            </Button>
            <Button
              size="small"
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
          </>
        </FormProvider>
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
