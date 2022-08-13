import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Entry, SimpleTextTimelineItem, TimelineItem } from "./Timeline";

export type FinishedTimelineItem = SimpleTextTimelineItem & {
  type: "finished";
};

export const isFinishedTimelineItem = (
  o: TimelineItem
): o is FinishedTimelineItem => {
  return "type" in o && o.type === "finished";
};

export const FinishedEntry = ({ item }: { item: TimelineItem }) => {
  return <Entry item={item} icon={faCheckCircle} iconTooltip="Finished" />;
};
