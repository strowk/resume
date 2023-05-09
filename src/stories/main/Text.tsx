import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import ReceivingScroll from "../../components/ReceivingScroll";

export const Header3: FunctionComponent<{ value?: string }> = ({
  value,
  children,
}) => (
  <h3 className="text-3xl text-center font-semibold pb-4 pt-12">
    {value ? (
      <ReceivingScroll id={value.toLowerCase()}>{value}</ReceivingScroll>
    ) : (
      children
    )}
  </h3>
);

export const Header4: FunctionComponent<{ value?: string }> = ({
  value,
  children,
}) => (
  <h4 className="font-semibold text-lg mb-1">
    {value ? (
      <ReceivingScroll id={value.toLowerCase()}>{value}</ReceivingScroll>
    ) : (
      children
    )}
  </h4>
);

type linkType = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const external = new RegExp("^(http)|(https)://");

const CustomLink: FunctionComponent<linkType> = (props: linkType) => {
  if (external.test(props.href || "")) {
    return <a target="_blank" className="dark:bg-green-900" {...props} />;
  }
  return (
    <Link className="dark:bg-green-900" to={props.href || "#"}>
      {props.children}
    </Link>
  );
};

interface TextProps {
  text?: string;
  children?: string;
}

export const Text: FunctionComponent<TextProps> = ({
  text,
  children,
}: TextProps) => {
  const comps: ReactMarkdownOptions["components"] = {
    a: ({ ...props }) => <CustomLink {...props} />,
  };
  return text ? (
    <ReactMarkdown
      components={comps}
      className="pb-4 max-w-prose mx-auto"
      children={text}
    ></ReactMarkdown>
  ) : (
    (children && (
      <ReactMarkdown components={comps} className="pb-4 max-w-prose mx-auto">
        {children}
      </ReactMarkdown>
    )) || <></>
  );
};
