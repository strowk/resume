import { createRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePostAnimationHash } from "../hooks/UsePostAnimationHash";

const ReceivingScrollAbstract = ({
  id,
  children,
  hashProvider,
}: React.PropsWithChildren<{
  id: string;
  hashProvider: { hash: string };
}>) => {
  const theref = createRef<HTMLDivElement>();

  const apply = (hashProvider: { hash: string }) => {
    if (hashProvider.hash === `#${id}`) {
      let div = theref.current;
      if (div) {
        console.log("scrolling into ", hashProvider.hash);
        div.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    apply(hashProvider);
  }, [hashProvider]);
  return (
    <div id={id} ref={theref}>
      {children}
    </div>
  );
};

const ReceivingScrollFromLocation = (
  props: React.PropsWithChildren<{
    id: string;
  }>
) => {
  const location = useLocation();
  return (
    <ReceivingScrollAbstract
      {...props}
      hashProvider={location}
    ></ReceivingScrollAbstract>
  );
};

export default (
  props: React.PropsWithChildren<{
    id: string;
  }>
) => {
  const postAnimation = usePostAnimationHash();
  return postAnimation.haveProvider ? (
    <ReceivingScrollAbstract
      {...props}
      hashProvider={postAnimation}
    ></ReceivingScrollAbstract>
  ) : (
    <ReceivingScrollFromLocation {...props}></ReceivingScrollFromLocation>
  );
};
