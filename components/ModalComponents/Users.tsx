import React, { useState } from "react";
import ThemeView from "../Themed/ThemeView";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

import { ThemedText } from "../ThemedText";

const Users = ({ managers = [] }) => {
  const [selectedManagers, setSelectedManagers] = useState(
    managers?.map(({ userId }) => userId)
  );
  const otherManagers = [
    {
      image_url: null,
      job: null,
      last_name: "Barajas",
      mail: "enrique@teamentapp.com",
      managers_task_id: 760,
      name: "Enrique",
      userId: 3,
    },
    {
      image_url: null,
      job: null,
      last_name: "Barajas De la rosa ramirez",
      mail: "enrique@teamentapp.com",
      managers_task_id: 760,
      name: "Stark",
      userId: 4,
    },
    {
      image_url: null,
      job: null,
      last_name: "Barajas",
      mail: "enrique@teamentapp.com",
      managers_task_id: 760,
      name: "Snow",
      userId: 5,
    },
    {
      image_url: null,
      job: null,
      last_name: "Barajas",
      mail: "enrique@teamentapp.com",
      managers_task_id: 760,
      name: "John",
      userId: 6,
    },
  ];
  return (
    <ThemeView
      style={[
        {
          height: "auto",
          width: "100%",
          alignContent: "flex-start",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
      ]}
    >
      <ThemedText
        style={[
          {
            fontWeight: "700",
            fontSize: 18,
            marginBottom: 16,
          },
        ]}
      >
        Personas assignadas
      </ThemedText>
      <SafeAreaView
        style={{
          width: "100%",
          marginTop: -0,
          position: "relative",
          height: "100%",
        }}
      >
        <FlatList
          keyExtractor={(item) => `${item?.userId}`}
          data={otherManagers}
          renderItem={({ item }) => (
            <UserListItem
              selected={selectedManagers.includes(item.userId)}
              {...item}
            />
          )}
          getItemLayout={(data, index) => ({
            length: 60,
            offset: 60 * index,
            index,
          })}
        ></FlatList>
      </SafeAreaView>
    </ThemeView>
  );
};

export default Users;
