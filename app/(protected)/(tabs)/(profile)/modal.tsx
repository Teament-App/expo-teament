import { View, Text } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { useSession } from "@/context/SessionContext";
import FormInput from "@/components/FormInput";
import { Button } from "@ui-kitten/components";
import FormDateInput from "@/components/FormDateInput";
import { UPDATE_USER_INFO } from "@/services/User.endpoints";
import { router } from "expo-router";

export default function EditProfile() {
  const { user } = useSession();
  const inputsTypes = [
    {
      key: "age",
      type: "text",
      label: "Edad",
    },
    {
      key: "birth_date",
      type: "date",
      label: "Fecha de nacimiento",
    },
    {
      key: "job",
      type: "text",
      label: "Puesto",
    },
    {
      key: "phone_number",
      type: "text",
      label: "Número de teléfono",
    },
  ];
  const inputs = ["age", "birth_date", "job", "phone_number"];
  const labels = [
    "Edad",
    "Fecha de nacimiento",
    "Puesto",
    "Número de teléfono",
  ];
  const {
    control,
    formState: { isValid },
    getValues,
  } = useForm({
    mode: "all",
  });

  const renderInputs = () => {
    console.log(user);
    return inputsTypes.map(({ key, label, type }, index) =>
      type === "text" ? (
        <FormInput
          label={labels[index]}
          size="large"
          style={{
            marginBottom: 16,
          }}
          defaultValue={user[key]}
          placeholder={"Escribe algo"}
          control={control}
          name={key}
        />
      ) : (
        <FormDateInput
          label={labels[index]}
          size="large"
          style={{
            marginBottom: 16,
          }}
          defaultValue={user[key]}
          placeholder={"Escribe algo"}
          control={control}
          name={key}
        />
      )
    );
  };

  const saveForm = async () => {
    try {
      const values = getValues();
      let body = {
        image_url: "",
        message: "",
        holidays: "",
      };
      delete values.age;
      body = {
        ...body,
        ...values,
      };
      await UPDATE_USER_INFO(body);
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      {renderInputs()}
      <Button onPress={saveForm} style={{ marginTop: 16 }} disabled={!isValid}>
        Guardar
      </Button>
    </View>
  );
}
