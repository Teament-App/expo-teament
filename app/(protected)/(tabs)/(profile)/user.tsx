import { StyleSheet, SafeAreaView, View } from "react-native";

import { useSession } from "../../../../context/SessionContext";

import moment from "moment";
import InfoWithLabel from "@/components/InfoWithLabel";
import UserPicAndName from "@/components/UserPicAndName";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { ThemedView } from "@/components/ThemedView";
import { Button, Text } from "@ui-kitten/components";
import { Link, router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function Settings() {
  const { user, signOut } = useSession();
  const theme = useColorScheme();
  const renderUserInfo = () => {
    const keysToIterate = ["age", "birth_date", "job", "phone_number", "rol"];
    const labels = [
      "Edad",
      "Fecha de nacimiento",
      "Puesto",
      "Número de teléfono",
      "Rol",
    ];

    const info = (objectKey: string) => {
      if (objectKey === "birth_date") {
        return moment(new Date(user?.birth_date)).format("DD/MM/YYYY");
      } else if (objectKey === "rol") {
        const roles: { [key: string]: string } = {
          "admin sec": "Admin",
          owner: "Owner",
          pm: "Project Manager",
          teammate: "Teammate",
        };
        return roles[user.rol];
      }

      return user[objectKey] || "Sin información disponible";
    };

    return keysToIterate.map((key, index) => (
      <InfoWithLabel
        key={key}
        fontSize="base"
        label={labels[index]}
        value={info(key)}
      />
    ));
  };

  const showEditModal = () => {
    router.push("/modal");
  };

  const logoutUser = () => {
    signOut();
  };

  return (
    <SafeAreaView>
      <ThemedView style={[styles.profilePicContainer]}>
        <UserPicAndName
          image_url={user?.image_url}
          userName={`${user?.name} ${user?.last_name}`}
          position="center"
          textSize="lg"
          bold
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 32,
          }}
        >
          {renderUserInfo()}
        </View>
        <Button
          onPress={showEditModal}
          style={{
            marginTop: 24,
          }}
          appearance="outline"
          size="small"
        >
          Editar
        </Button>
        <ThemedText
          style={{
            marginTop: 16,
            textAlign: "center",
          }}
          onPress={logoutUser}
          status="primary"
        >
          Cerrar sesión
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profilePicContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    height: "100%",
  },
});
