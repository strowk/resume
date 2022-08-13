import { FunctionComponent, useState } from "react";
import ReactMarkdown from "react-markdown";

export const Header3: FunctionComponent<{}> = ({ children }) => (
  <h3 className="text-3xl text-center font-semibold pb-4 pt-12">{children}</h3>
);

const Link: FunctionComponent<{ props: any }> = ({ props }: { props: any }) => (
  <a className="dark:bg-gray-700" {...props} />
);

export const Text: FunctionComponent<{ children: string }> = ({
  children,
}: {
  children: string;
}) => (
  <Focusable>
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => (
          <a className="dark:bg-green-900" {...props} />
        ),
      }}
      className="pb-4 max-w-prose mx-auto"
    >
      {children}
    </ReactMarkdown>
  </Focusable>
);

export const Focusable: FunctionComponent = ({ children }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleDoubleClick = () => {
    setIsFocused((val) => !val);
  };
  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={`rounded-md p-2 ${
        isFocused ? "swiper-no-swiping bg-gray-400" : "bg-gray-800"
      }`}
    >
      {children}
    </div>
  );
};
