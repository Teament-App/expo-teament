import { ProjectCardType } from "@/components/ProjectCard";

export const projectCardTranslator = ({
  color,
  name,
  total_progress,
  members,
  stand_alone,
  id,
}: ProjectCardType) => {
  return {
    name,
    color,
    total_progress,
    members,
    stand_alone,
    id,
  };
};
