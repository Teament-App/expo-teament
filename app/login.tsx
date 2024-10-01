import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "@ui-kitten/components";
import LogoExtended from "@/components/svg/LogoExtended";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import apiClient from "@/services/Axios.client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSession } from "@/context/SessionContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function index() {
  const [passVisible, setPassVisible] = useState(true);
  const { signIn } = useSession();
  const form = useForm({
    mode: "onTouched",
  });
  const renderEyeIcon = (props: any): React.ReactElement => {
    return (
      <TouchableOpacity onPress={() => setPassVisible((prev) => !prev)}>
        <Icon {...props} name={passVisible ? "eye-off" : "eye"} />
      </TouchableOpacity>
    );
  };

  const submit = async () => {
    try {
      const ans = await apiClient.post("/login", {
        mail: "enrique@teamentapp.com",
        password: "Uae9djtrklez0/",
        type_login: "own",
      });
      const { access_token, refresh_token } = ans?.data;
      AsyncStorage.setItem("accessToken", access_token);
      AsyncStorage.setItem("refreshToken", refresh_token);
      signIn(ans?.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <LogoExtended />
      <FormProvider {...form}>
        <View>
          <FormInput
            label={"Correo electrónico"}
            size="large"
            style={[styles.input]}
            placeholder="john.doe@verkian.com"
            name="email"
            autocapitalize="none"
            rules={{
              required: "Ingresa tu correo electrónico",
            }}
          />
          <FormInput
            label={"Contraseña"}
            size="large"
            style={[styles.input]}
            placeholder="*********"
            secureTextEntry={passVisible}
            accessoryRight={renderEyeIcon}
            name="password"
            rules={{
              required: "Ingresa tu cotraseña",
            }}
          />

          <Button
            disabled={!form.formState.isValid}
            style={[styles.button]}
            onPress={submit}
          >
            Iniciar sesión
          </Button>
        </View>
      </FormProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  input: {
    width: "70%",
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
