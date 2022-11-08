import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ItemWithTechs } from "./Timeline";
import { Entry, SimpleTextTimelineItem, TimelineItem } from "./Timeline";

export type ProjectTimelineItem = ItemWithTechs &
  SimpleTextTimelineItem & {
    type: "project";
  };

export const isProjectTimelineItem = (
  o: TimelineItem
): o is ProjectTimelineItem => {
  return "type" in o && o.type === "project";
};

export const ProjectEntry = ({ item }: { item: TimelineItem }) => {
  return <Entry item={item} icon={faCoffee} iconTooltip="Project" />;
};
