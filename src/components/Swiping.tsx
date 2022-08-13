import {
  FunctionComponent,
  ReactNode,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInterval } from "../hooks/UseInterval";
import { useWindowWidth } from "../hooks/UseWindowWidth";

export const Swiping: FunctionComponent<{
  tabs: { node: ReactNode }[];
  onChangeTab?: (newTab: number) => void;
  currentTab: number;
  onChangeNewTab?: (newTab: number) => void;
  newTab: number;
}> = ({ tabs, onChangeTab, currentTab, onChangeNewTab, newTab }) => {
  const [stickingInProgress, setStickingInProgress] = useState<boolean>(false);
  const [xDown, setXDown] = useState<number>(0);
  const [yDown, setYDown] = useState<number>(0);
  const [stickingTo, setStickingTo] = useState<number>(0);
  const [diff, setDiff] = useState<number>(0);
  const [touchInProgress, setTouchInProgress] = useState<boolean>(false);
  const holderRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth(); // only used to hook useEffect for holder width calculation
  const [holderWidth, setHolderWidth] = useState<number | undefined>();
  const [touchingFor, setTouchingFor] = useState<number | undefined>();

  // stick when window is resized
  useEffect(() => {
    setHolderWidth(holderRef.current?.clientWidth);
    setStickingInProgress(true);
  }, [holderRef, windowWidth]);

  // setting where swiping is suposed to stick
  useEffect(() => {
    setStickingTo(!holderWidth ? 0 : currentTab * holderWidth);
  }, [currentTab, holderWidth]);

  // defining new tab index based on current swipe position (diff)
  useEffect(() => {
    const calculated = currentTab + Math.sign(diff - stickingTo);
    if (!stickingInProgress && calculated >= 0 && calculated < tabs.length) {
      onChangeNewTab && onChangeNewTab(calculated);
    }
  }, [currentTab, diff, stickingTo, onChangeNewTab]);

  // run sticking when there is no active touch and tab has been changed,
  // this works also when tab is changed outside of this component with properties
  useEffect(() => {
    if (currentTab !== newTab && !touchInProgress) {
      setStickingInProgress(true);
    }
  }, [currentTab, newTab, touchInProgress]);

  // smoothly stick to position
  useInterval(
    () => {
      if (stickingInProgress) {
        const step = 40;
        const adjustment = Math.sign(stickingTo - diff) * step;
        const closeToSnap = Math.abs(stickingTo - diff) < 2 * step;
        if (closeToSnap) {
          setStickingInProgress(false);
          setDiff(stickingTo);
        } else {
          setDiff((diff) => diff + adjustment);
        }
      }
    },
    stickingInProgress ? 4 : null
  );

  // ignoring long presses, which are not swipes
  useInterval(
    () => {
      if (touchingFor && touchingFor > 1000 && newTab === currentTab) {
        handleTouchEnd();
      }
      setTouchingFor((touchingFor || 0) + 20);
    },
    touchInProgress ? 20 : null
  );

  const handleTouchStart: TouchEventHandler = (event) => {
    if (stickingInProgress) {
      return;
    }
    const firstTouch = event.touches[0];
    setTouchInProgress(true);
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  const handleTouchMove: TouchEventHandler = (event) => {
    if (stickingInProgress) {
      return;
    }
    if (!touchInProgress) {
      return;
    }
    const firstTouch = event.touches[0];
    var xUp = firstTouch.clientX;
    var yUp = firstTouch.clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (
        newTab !== currentTab ||
        (holderWidth && Math.abs(diff - stickingTo) < holderWidth / 5)
      ) {
        setDiff(diff + xDiff);
      }
    }

    setXDown(xUp);
    setYDown(yUp);
  };

  const handleTouchEnd = () => {
    const holderWidth = holderRef.current?.clientWidth;
    if (holderWidth && Math.abs(diff - stickingTo) > holderWidth / 2) {
      if (newTab !== currentTab) {
        onChangeTab && onChangeTab(newTab);
      }
    }
    setTouchingFor(undefined);
    setTouchInProgress(false);
    setStickingInProgress(true);
  };

  return (
    <div className="relative overflow-x-clip">
      <div
        className="absolute w-full"
        style={{ left: -1 * diff }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={holderRef}
      >
        <div className="flex flex-row" style={{ width: `${tabs.length}00%` }}>
          {tabs.map((it, index) => (
            <div className="w-full overflow-x-clip" key={index}>
              {it.node}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
