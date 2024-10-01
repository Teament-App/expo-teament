import { useReactQuery } from "@/hooks/useReactQuery";
import { GET_USER_PROJECTS } from "@/services/Projects.endpoints";
import { Project } from "@/types/Project.type";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";

export const ProjectSelect = ({ onChange, selectedValue }: any) => {
  const [projects, setProjects] = useState<Project[]>();
  const { response: responseProjects, error: projectError } = useReactQuery<{
    actualPage: number;
    projects: Project[];
  }>(["projects"], GET_USER_PROJECTS);
  useEffect(() => {
    if (responseProjects) {
      const { projects } = responseProjects;
      setProjects(projects);
    }
  }, [responseProjects]);

  if (!projects) {
    return null;
  }
  return (
    <View style={{ marginTop: 8 }}>
      <ThemedText
        style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 12 }}
        type="defaultSemiBold"
      >
        Proyecto
      </ThemedText>
      <Select
        multiSelect={false}
        value={(props) => {
          return <ThemedText>{selectedValue?.name}</ThemedText>;
        }}
        accessoryLeft={() => (
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              marginRight: 0,
              backgroundColor: selectedValue?.color,
            }}
          ></View>
        )}
        onSelect={(info) => {
          const { row } = info as IndexPath;
          const selected = projects[row];
          onChange({
            project_name: selected?.name,
            project_color: selected?.color,
            projects_id: selected?.id,
          });
        }}
      >
        {projects?.map((project) => (
          <SelectItem
            style={{ backgroundColor: project?.color }}
            title={project?.name}
          />
        ))}
      </Select>
    </View>
  );
};
