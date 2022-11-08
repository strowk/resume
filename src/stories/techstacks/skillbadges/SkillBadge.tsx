import { Link } from "react-router-dom";

const badge = (value: string) => (
  <span className="inline-flex items-center justify-center px-4 py-1 mt-1 mr-2 font-bold text-md text-white bg-blue-600 rounded-full">
    {value}
  </span>
);

export const SkillBadgeWithLink = ({ value }: { value: string }) => {
  return (
    <SkillBadge
      value={value}
      linkTo={"#" + value.replaceAll(" ", "-").toLowerCase()}
    ></SkillBadge>
  );
};

export const SkillBadge = ({
  value,
  linkTo,
}: {
  value: string;
  linkTo?: string;
}) => (linkTo ? <Link to={linkTo}>{badge(value)}</Link> : badge(value));
