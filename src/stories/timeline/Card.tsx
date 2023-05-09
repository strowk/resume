import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "./Icon";
import { Techs } from "./Techs";
import { Header4 } from "../main/Text";

export interface CardLink {
  title: string;
  url: string;
  icon?: IconDefinition;
}

export const Card = ({
  title,
  text,
  icon,
  iconTooltip,
  techs,
  links,
  forceIcon = false,
}: {
  title: string;
  text: string;
  icon: IconDefinition;
  iconTooltip: string;
  techs?: string[];
  links?: CardLink[];
  forceIcon?: boolean;
}) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl mt-4 mr-auto shadow-md max-w-prose">
      <div className="flex items-baseline">
        <div className={`${forceIcon || "md:hidden"} mr-2 mb-2`}>
          <Icon icon={icon} tooltip={iconTooltip} tooltipPlacement="top"></Icon>
        </div>
        <Header4 value={title}></Header4>
      </div>
      <p className="leading-tight w-full">{text}</p>
      {links && <Links links={links} />}
      {techs && <Techs techs={techs} />}
    </div>
  );
};

const Links = ({ links }: { links: CardLink[] }) => {
  return (
    <div className="px-1 pt-1">
      {"see:"}
      {links.map((link) => (
        <a
          href={link.url}
          key={link.url}
          target={"_blank"}
          className="px-1 hover:bg-sky-700 whitespace-nowrap"
        >
          {"<"}
          <FontAwesomeIcon
            icon={link.icon ? link.icon : faLink}
            className="mr-1"
          ></FontAwesomeIcon>
          <span className="underline">{link.title}</span>
          {">"}
        </a>
      ))}
    </div>
  );
};
