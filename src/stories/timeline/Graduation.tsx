import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Entry, SimpleTextTimelineItem, TimelineItem } from "./Timeline";

export type EducationTimelineItem = SimpleTextTimelineItem & {
  type: "graduation";
};

export const isEducationTimelineItem = (
  o: TimelineItem
): o is EducationTimelineItem => {
  return "type" in o && o.type === "graduation";
};

export const EducationEntry = ({ item }: { item: TimelineItem }) => {
  return <Entry item={item} icon={faGraduationCap} iconTooltip="Graduation" />;
};
