import { Placement } from "@popperjs/core";
import React, { FunctionComponent, useEffect, useState } from "react";
import { usePopper } from "react-popper";

export const Tooltip: FunctionComponent<{
  tooltip: JSX.Element | string;
  placement?: Placement;
}> = ({ children, tooltip, placement = "auto" }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [showing, setShowing] = useState<boolean>(false);
  const showTooltip = () => {
    setShowing(true);
  };
  const hideTooltip = () => {
    setShowing(false);
  };
  useEffect(() => {
    referenceElement?.addEventListener("mouseenter", showTooltip);
    referenceElement?.addEventListener("mouseleave", hideTooltip);
  }, [referenceElement]);

  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    strategy: "fixed", // otherwise requires repositioning on inside absolute elements
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "flip", options: { fallbackPlacements: ["bottom", "right"] } },
    ],
  });

  return (
    <>
      <button ref={setReferenceElement}>{children}</button>

      <div
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className={`${
          showing ? "block" : "hidden"
        } bg-black px-1 rounded-md z-10`}
      >
        {tooltip}
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );
};
