import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Placement } from "@popperjs/core";
import { Tooltip } from "../../components/Tooltip";

export const Icon = ({
  icon,
  tooltip,
  tooltipPlacement,
}: {
  icon: IconDefinition;
  tooltip: string;
  tooltipPlacement: Placement;
}) => {
  return (
    <Tooltip tooltip={tooltip} placement={tooltipPlacement}>
      <FontAwesomeIcon icon={icon} className="text-white"></FontAwesomeIcon>
    </Tooltip>
  );
};
