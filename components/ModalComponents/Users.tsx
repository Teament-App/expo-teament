import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

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
    <ThemedView
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
            // <UserListItem
            //   selected={selectedManagers.includes(item.userId)}
            //   {...item}
            // />
            <View>
              <Text>Hola</Text>
            </View>
          )}
          getItemLayout={(data, index) => ({
            length: 60,
            offset: 60 * index,
            index,
          })}
        ></FlatList>
      </SafeAreaView>
    </ThemedView>
  );
};

export default Users;
