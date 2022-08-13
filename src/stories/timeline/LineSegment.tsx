import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { EntryDate } from "./EntryDate";
import { Icon } from "./Icon";
import "./LineSegment.css";

export const Line = () => (
  <div className="h-120p w-10 flex items-center justify-center">
    <div className="h-full w-1 bg-gray-900 pointer-events-none"></div>
  </div>
);

export const TimelineLineSegment = ({
  icon,
  date,
  iconTooltip,
}: {
  icon: IconDefinition;
  iconTooltip: string;
  date?: Date;
}) => {
  return (
    <>
      <Line />
      <div className="bg-gray-900 shadow text-center leading-10 absolute -left-1/2 top-11 rounded-l-md -mt-5 md:w-10 md:h-10 md:left-0 md:rounded-full">
        {date ? (
          <div className="px-4 md:hidden">
            <EntryDate date={date} />
          </div>
        ) : (
          <div className="md:hidden rounded-full w-6 h-6 left-7 top-2 leading-10 bg-gray-900 shadow absolute" />
        )}
        <div className="hidden md:block">
          {date && (
            <div className="md:-left-28 md:absolute">
              <EntryDate date={date} />
            </div>
          )}
          <Icon
            icon={icon}
            tooltip={iconTooltip}
            tooltipPlacement="left"
          ></Icon>
        </div>
      </div>
    </>
  );
};
