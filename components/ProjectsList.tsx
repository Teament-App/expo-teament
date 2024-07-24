import React from "react";
import { StyleSheet, View } from "react-native";
import ProjectCard, { ProjectCardType } from "./ProjectCard";
import { FlatList } from "react-native-gesture-handler";

const ProjectsList = ({ horizontal = false, data }: any) => {
  const renderProjects = ({ item }: { item: ProjectCardType }) => {
    if (horizontal) {
      return <ProjectCard {...item} />;
    }
    return <ProjectCard stand_alone {...item} />;
  };

  return (
    <FlatList
      data={data}
      style={[
        horizontal ? styles.projectsSliderHorizontal : styles.projectsSlider,
      ]}
      renderItem={renderProjects}
      keyExtractor={(item) => `${item.id}`}
      horizontal={horizontal}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  projectsSlider: {
    height: "100%",
  },
  projectsSliderHorizontal: {
    height: 116,
    flexGrow: 0,
  },
});

export default ProjectsList;
