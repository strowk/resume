import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Tab } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as Swip, Controller } from "swiper";
import useBreakpoint from "use-breakpoint";

import "swiper/css";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

interface NavProps {
  swiper?: Swip;
  currentTab: number;
  tabs: Array<Tab>;
  setNavSwiper: (swip: Swip) => void;
}

export const Nav: FunctionComponent<NavProps> = ({
  swiper,
  currentTab,
  tabs,
  setNavSwiper,
}: NavProps) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isMiddle = breakpoint == "desktop";
  const isSmall = breakpoint == "tablet";

  return (
    <nav className="px-4 flex flex-row text-4xl text-center font-semibold pb-8 border-b-4 border-gray-900">
      <SlideButton
        onClick={() => {
          swiper?.slidePrev();
        }}
        icon={faAngleLeft}
      />
      <Swiper
        modules={[Controller]}
        onSwiper={setNavSwiper}
        enabled={false}
        slidesPerView={isMiddle ? 3 : isSmall ? 2 : 1}
        //   controller={{ control: swiper }}
      >
        {tabs.map((tab, index) => {
          //   const b = useBreakpoint?.("sm");
          // return <div>test</div>
          return (
            <SwiperSlide key={tab.title}>
              {/* {b && "mobile"} */}
              <NavButton
                onClick={() => {
                  swiper?.slideTo(index);
                }}
                isCurrent={index === currentTab}
                tab={tab}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SlideButton
        onClick={() => {
          swiper?.slideNext();
        }}
        icon={faAngleRight}
      />
    </nav>
  );
};

const NavButton = ({
  onClick,
  isCurrent,
  tab,
}: {
  onClick: () => void;
  isCurrent: boolean;
  tab: Tab;
}) => (
  <button
    className={`font-semibold py-1 px-4 ${
      !isCurrent && "text-gray-500"
      // (index === newTab ? "text-gray-400" : "text-gray-500")
    } rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-gray-100 duration-300`}
    onClick={onClick}
    key={tab.title}
  >
    <h2
      className={`text-4xl font-semibold pb-2 border-b-4 ${
        isCurrent
          ? "border-purple-500"
          : // : index === newTab
            // ? "border-purple-900"
            "border-gray-900"
      }`}
    >
      {tab.title}
    </h2>
  </button>
);

const SlideButton = ({
  onClick,
  icon,
}: {
  onClick: () => void;
  icon: IconDefinition;
}) => (
  <button
    className="md:mx-4 w-16 h-16 text-gray-500 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-gray-100 duration-300"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
  </button>
);
