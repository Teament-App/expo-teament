import { useEffect, useState } from "react";
import { ApiResponseWithData } from "@/types/Response.type";
import { UseQueryResult, useQuery } from "react-query";
import { StyleSheet } from "react-native";
import { useSession } from "@/context/SessionContext";
import { ThemedView } from "@/components/ThemedView";
import { useReactQuery } from "@/hooks/useReactQuery";
import { useTranslator } from "@/hooks/useTranslator";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@ui-kitten/components";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { StreamChat } from 'stream-chat';
import { GET_CHAT_TOKEN } from "@/services/Chat.endpoints";

const client = StreamChat.getInstance('esr6fnjdvts9');

export default function TabTwoScreen() {
  const { signOut } = useSession();
  const [ userData, setUserData ] = useState<any>(undefined);
  const [successConnection, setSetsuccessConnection] = useState<boolean|undefined>(undefined);

  if (!client.userID) {
    const { user: userInfo } = useSession();

    console.log('USEEER', userInfo);

    console.log('CLIENTEEEEEEE:', client);
    if (userInfo) {
      const chatUserId = userInfo?.chat?.ID || undefined;
      const chatUserToken = userInfo?.chat?.token || undefined;

      console.log('CHAT 1:', chatUserId);
      console.log('CHAT 2:', chatUserToken);

      if ((chatUserId && chatUserToken)) {
        client.connectUser(
          {
            id: chatUserId,
            name: userInfo?.name,
          },
          chatUserToken
        ).catch(() => { setSetsuccessConnection(false) });
      }
    }
  }

  useEffect(() => {
    if (successConnection === false) {
      console.log('NO JALÓ, EJECUANTDO....');
      const { response: chatLoginData } = useReactQuery(['user-info'], GET_CHAT_TOKEN);
      /* for (let index = 0; index <= 1; index++) {
        try {
          GET_CHAT_TOKEN().then((ress) => {
            console.log('LOGIIIIIN:', ress);
            setUserData(ress);
            setSetsuccessConnection(true);
          });
        } catch (e) {
          console.log('ERROR:', e);
        }
      } */
      console.log('LOGIIIIIN:', chatLoginData);
      setUserData(chatLoginData);
    }
  }, [successConnection])



  return (
    <SafeAreaView>
      <ThemedView
        style={{
          height: "100%",
          padding: 8,
        }}
      >
        <ThemedView
          style={{
            display: "flex",
            gap: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThemedText
            type="subtitle"
            style={{ fontFamily: "Montserrat_600SemiBold" }}
          >
            Chat
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={[{ width: "100%", height: "100%" }, styles.tasksContainer]}
        >
          <ThemedText>ASDF</ThemedText>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    padding: 8,
    height: 126,
    flexGrow: 0,
  },
  tasksContainer: {
    borderRadius: 5,
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border2,
    flexDirection: "column",
    flexGrow: 1,
    marginHorizontal: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    height: "100%",
  },
});
