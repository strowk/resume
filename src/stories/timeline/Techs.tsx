import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useWindowWidth } from "../../hooks/UseWindowWidth";
import { SkillBadge } from "../techstacks/skillbadges/SkillBadge";

export const Techs = ({ techs }: { techs: string[] }) => {
  const width = useWindowWidth();
  const [expanded, setExpanded] = useState<boolean>(false);

  const shown = expanded ? techs : takeEnoughToFit(techs, width);

  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };
  return (
    <p className="mt-2">
      {shown.map((tech) => (
        <SkillBadge value={tech} key={tech}></SkillBadge>
      ))}
      {techs.length > shown.length && (
        <button
          className="inline-flex items-center justify-center px-2 py-0.5 mt-1 text-sm text-white bg-blue-800 rounded-full"
          onClick={expand}
        >
          {`+${techs.length - shown.length} more`}
        </button>
      )}
      {expanded && (
        <button
          className="inline-flex items-center justify-center w-8 h-8 mt-1 text-sm text-white bg-blue-800 rounded-full"
          onClick={collapse}
        >
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </button>
      )}
    </p>
  );
};

const takeEnoughToFit = (techs: string[], width: number) => {
  const limit = width / 25;
  let countedChars = 0;
  return techs.filter((it) => {
    countedChars += it.length;
    return countedChars < limit;
  });
};
