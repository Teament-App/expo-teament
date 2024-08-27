import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { commonColors } from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { TaskType } from "@/types/Task.type";
import apiClient from "@/services/Axios.client";
import { useQueryClient } from "react-query";

export default function FileUploader({
  task,
  refetch,
}: {
  task?: TaskType;
  refetch?: () => void;
}) {
  const queryClient = useQueryClient();
  const selectImage = (useLibrary: boolean) => async () => {
    try {
      let result;
      if (useLibrary) {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
      } else {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
      }

      if (!result.canceled) {
        console.log(result.assets[0].uri);
        await uploadImage(result?.assets[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const uploadImage = async (file: ImagePicker.ImagePickerAsset) => {
    try {
      const formData = new FormData();
      formData.append(
        "files",
        {
          uri: file.uri,
          name: file.fileName,
          type: "image/jpeg",
        } as any,
        file?.fileName || new Date().getTime().toString()
      );
      formData.append("tasksId", `${task?.id}`);
      formData.append("project", `${task?.projects_id}`);
      formData.append("createCopy", "1");
      formData.append(
        "users",
        task?.managers?.map((m: any) => m.userId).join(",") || ""
      );
      await apiClient({
        url: "/fileUpload",
        method: "post",
        data: formData,
      });
      if (refetch) {
        refetch();
      }
    } catch (e) {
      console.log(JSON.stringify(e));
      console.log(e);
    }
  };
  return (
    <TouchableOpacity
      onPress={selectImage(true)}
      style={[styles.uploadContainer]}
    >
      <View>
        <ThemedText style={{ fontSize: 14 }}>Subir archivos</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: commonColors.gray_1,
    borderRadius: 4,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#c2c2c2",
  },
});
