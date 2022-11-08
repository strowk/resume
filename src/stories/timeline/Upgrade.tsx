import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Entry, SimpleTextTimelineItem, TimelineItem } from "./Timeline";

export type UpgradeTimelineItem = SimpleTextTimelineItem & {
  type: "upgrade";
  tooltip: string;
};

export const isUpgradeTimelineItem = (
  o: TimelineItem
): o is UpgradeTimelineItem => {
  return "type" in o && o.type === "upgrade";
};

export const UpgradeEntry = ({ item }: { item: UpgradeTimelineItem }) => {
  return (
    <Entry item={item} icon={faArrowAltCircleUp} iconTooltip={item.tooltip} />
  );
};
