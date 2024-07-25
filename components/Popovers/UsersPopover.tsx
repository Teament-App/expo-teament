import { View, Text } from "react-native";
import React, { ReactElement, useState } from "react";
import { Layout, Popover } from "@ui-kitten/components";
import { ManagerTaskType } from "@/types/Task.type";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FlatList } from "react-native-gesture-handler";
import { useReactQuery } from "@/hooks/useReactQuery";
import { GET_TEAM_USERS } from "@/services/User.endpoints";
import UserWithInfo from "../UserWithInfo";
import AddAnchor from "../AddAnchor";

export default function UsersPopover({
  anchorLabel,
  dataToCompare,
  onChange,
}: {
  anchorLabel: string;
  dataToCompare: ManagerTaskType[];
  onChange: (e?: any) => void;
}) {
  const { response: teammatesResponse } = useReactQuery<{
    active_users: number;
    free_seats: number;
    inactive_users: number;
    pending_users: number;
    users: any[];
  }>(["teammates"], GET_TEAM_USERS);
  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(false);
  return (
    <Popover
      visible={visible}
      onBackdropPress={hide}
      anchor={() =>
        AddAnchor({
          toggle: () => setVisible((prev) => !prev),
          label: anchorLabel,
          data: dataToCompare,
        })
      }
    >
      <Layout
        style={{
          paddingHorizontal: 4,
          paddingVertical: 8,
          width: 300,
          borderColor: Colors?.light?.primary,
          borderWidth: 1,
          borderRadius: 8,
          maxHeight: 300,
        }}
      >
        <FlatList
          data={teammatesResponse?.users}
          renderItem={({ item }) =>
            item?.name && (
              <UserWithInfo
                onPress={() => onChange(item)}
                selected={dataToCompare?.some(
                  ({ userId }) => userId === item?.userId
                )}
                userName={`${item?.name} ${item?.last_name}`}
                job={item?.job || null}
              />
            )
          }
          keyExtractor={(item) => item?.userId}
        ></FlatList>
      </Layout>
    </Popover>
  );
}
