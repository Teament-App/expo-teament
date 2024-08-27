import { View } from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import CalendarComponent from "../components/ModalComponents/Calendar";
import Priority from "../components/ModalComponents/Priority";
import Users from "../components/ModalComponents/Users";
export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = useMemo(() => router.canGoBack(), []);
  const params = useLocalSearchParams();
  const { taskId, taskDate, type, taskData } = params;
  const passedInfo = JSON.parse(taskData as any);
  console.log("TASK ID: ", taskData);
  return (
    <View style={[{ flex: 1, alignItems: "center", justifyContent: "center" }]}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {type === "calendar" && (
        <CalendarComponent
          delivery_date={(passedInfo as any)?.delivery_date}
          initial_delivery_date={(passedInfo as any)?.initial_delivery_date}
        />
      )}
      {type === "priority" && (
        <Priority priority={(passedInfo as any)?.priority} />
      )}
      {/* {type === "users" && <Users managers={(passedInfo as any)?.managers} />} */}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
    </View>
  );
}
