import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  isProjectTimelineItem,
  ProjectEntry,
  ProjectTimelineItem,
} from "./Project";
import {
  isUpgradeTimelineItem,
  UpgradeEntry,
  UpgradeTimelineItem,
} from "./Upgrade";
import {
  EducationEntry,
  EducationTimelineItem,
  isEducationTimelineItem,
} from "./Graduation";
import {
  NewJobEntry,
  NewJobTimelineItem,
  isNewJobTimelineItem,
} from "./NewJob";
import {
  FinishedEntry,
  FinishedTimelineItem,
  isFinishedTimelineItem,
} from "./Finished";
import { TimelineLineSegment } from "./LineSegment";
import { Card } from "./Card";
import ReceivingScroll from "../../components/ReceivingScroll";

export type TimelineItem =
  | SimpleTextTimelineItem
  | ProjectTimelineItem
  | FinishedTimelineItem
  | NewJobTimelineItem
  | UpgradeTimelineItem
  | EducationTimelineItem;

export interface SimpleTextTimelineItem {
  title: string;
  text: string;
  date?: Date;
}

export interface ItemWithTechs {
  techs: string[];
}

type TimelineItemWithTechs = TimelineItem & ItemWithTechs;

const isTimelineItemWithTechs = (
  o: TimelineItem
): o is TimelineItemWithTechs => {
  return "techs" in o;
};

export const Entry = ({
  item,
  icon,
  iconTooltip,
}: {
  item: TimelineItem;
  icon: IconDefinition;
  iconTooltip: string;
}) => {
  const hideForMobile = "hidden md:block";
  return (
    <div className="flex md:contents">
      <div
        className={`${
          item.date ? "" : hideForMobile
        } col-start-3 col-end-4 mr-10 ml-5 md:mx-auto relative`}
      >
        <TimelineLineSegment
          date={item.date}
          icon={icon}
          iconTooltip={iconTooltip}
        />
      </div>

      <div className="col-start-4 col-end-11">
        <ReceivingScroll id={item.title.toLowerCase().replaceAll(" ", "-")}>
          <Card
            title={item.title}
            text={item.text}
            icon={icon}
            iconTooltip={iconTooltip}
            techs={isTimelineItemWithTechs(item) ? item.techs : undefined}
          />
        </ReceivingScroll>
      </div>
    </div>
  );
};

const TimelineEntry = ({ item }: { item: TimelineItem }) => {
  return isProjectTimelineItem(item) ? (
    <ProjectEntry item={item} />
  ) : isNewJobTimelineItem(item) ? (
    <NewJobEntry item={item} />
  ) : isUpgradeTimelineItem(item) ? (
    <UpgradeEntry item={item} />
  ) : isEducationTimelineItem(item) ? (
    <EducationEntry item={item} />
  ) : isFinishedTimelineItem(item) ? (
    <FinishedEntry item={item} />
  ) : (
    <></>
  );
};

export const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="container">
      <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
        {items.map((item) => (
          <TimelineEntry
            item={item}
            key={item.title + (item.date ? item.date.toString() : "")}
          />
        ))}
      </div>
    </div>
  );
};
