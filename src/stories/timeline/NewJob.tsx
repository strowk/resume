import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Entry, SimpleTextTimelineItem, TimelineItem } from "./Timeline";

export type NewJobTimelineItem = SimpleTextTimelineItem & {
  type: "newJob";
};

export const isNewJobTimelineItem = (
  o: TimelineItem
): o is NewJobTimelineItem => {
  return "type" in o && o.type === "newJob";
};

export const NewJobEntry = ({ item }: { item: TimelineItem }) => {
  return <Entry item={item} icon={faBriefcase} iconTooltip="New Job" />;
};
