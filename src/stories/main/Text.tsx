import { FunctionComponent, useState } from "react";
import ReactMarkdown, { Options } from "react-markdown";
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
    a: ({ node, ...props }) => <CustomLink {...props} />,
  };
  return (
    <Focusable>
      {text ? (
        <ReactMarkdown
          components={comps}
          className="pb-4 max-w-prose mx-auto"
          children={text}
        ></ReactMarkdown>
      ) : (
        children && (
          <ReactMarkdown
            components={comps}
            className="pb-4 max-w-prose mx-auto"
          >
            {children}
          </ReactMarkdown>
        )
      )}
    </Focusable>
  );
};

export const Focusable: FunctionComponent = ({ children }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleDoubleClick = () => {
    setIsFocused((val) => !val);
  };
  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={`rounded-md p-2 ${
        isFocused ? "swiper-no-swiping bg-gray-900" : "bg-gray-800"
      }`}
    >
      {children}
    </div>
  );
};