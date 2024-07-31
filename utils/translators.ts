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

export const FormatDateToDisplay = (date?: Date, startDate?: Date) => {
  if (!date) {
    return "Sin fecha añadida";
  }
  if (startDate) {
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(date);
    return `${startDateObject.toLocaleDateString()} - ${endDateObject.toLocaleDateString()}`;
  }

  const dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};
