import { FunctionComponent, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Swiper as Swip,
  Controller,
  EffectCards,
  EffectCube,
  EffectCoverflow,
} from "swiper";
import { OpenSource } from "./OpenSource";
import { History } from "./History";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

import "./main.css";
import { Header3, Text } from "./Text";
import { About } from "./About";
import { Nav } from "./Navigation";
import { TechnicalSkills } from "../techstacks/Techstacks";
import { useBreakpoint } from "../../hooks/UseBreakpoints";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  PostAnimationHashContext,
  PostAnimationHashProvider,
  usePostAnimationHash,
} from "../../hooks/UsePostAnimationHash";

export interface Tab {
  title: string;
  node: JSX.Element;
  route: string;
}

export const Data: FunctionComponent = () => {
  const tabs: Array<Tab> = [
    {
      title: "Tech",
      node: (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4 pt-4">
          <TechnicalSkills />
        </div>
      ),
      route: "/tech",
    },
    {
      title: "Timeline",
      node: (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4">
          <History />
        </div>
      ),
      route: "/timeline",
    },
    {
      title: "Open Source",
      node: (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4">
          <OpenSource />
        </div>
      ),
      route: "/open-source",
    },
    {
      title: "About",
      node: (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 px-4 pb-4">
          <About />
        </div>
      ),
      route: "/about",
    },
  ];

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [navSwiper, setNavSwiper] = useState<Swip | undefined>();
  const [swiper, setSwiper] = useState<Swip | undefined>();

  return (
    <PostAnimationHashProvider>
      <TheSwiper
        currentTab={currentTab}
        swiper={swiper}
        tabs={tabs}
        setNavSwiper={setNavSwiper}
        navSwiper={navSwiper}
        setSwiper={setSwiper}
        setCurrentTab={setCurrentTab}
      ></TheSwiper>
    </PostAnimationHashProvider>
  );
};

const TheSwiper = ({
  currentTab,
  swiper,
  tabs,
  setNavSwiper,
  navSwiper,
  setSwiper,
  setCurrentTab,
}: {
  currentTab: number;
  swiper?: Swip;
  tabs: Array<Tab>;
  setNavSwiper: (swiper: Swip) => void;
  navSwiper?: Swip;
  setSwiper: (swiper: Swip) => void;
  setCurrentTab: (num: number) => void;
}) => {
  const location = useLocation();
  const routingNavigate = useNavigate();

  const [navigateOnSwipe, setNavigateOnSwipe] = useState<Boolean>(false);
  const postAnimationHash = usePostAnimationHash();

  useEffect(() => {
    if (!navigateOnSwipe) {
      setNavigateOnSwipe(true);
      return;
    }
    let tab = tabs[currentTab];
    if (location.pathname !== tab.route) {
      routingNavigate(tab.route);
    }
  }, [currentTab]);

  const syncHash = () => {
    if (postAnimationHash.hash !== location.hash) {
      postAnimationHash.setHash(location.hash);
    }
  };

  const slideToLocation = (swiper?: Swip) => {
    console.log(`nav is ${location.pathname}`);
    let tabIndex = tabs.findIndex((tab) => tab.route == location.pathname);
    const goingToSlide = tabIndex >= 0 && currentTab !== tabIndex;
    if (goingToSlide) {
      swiper?.slideTo(tabIndex);
    } else {
      // when location has changed, but we do not need to slide there
      // we need to immediately pass down new hash of location, because
      // onSlideChangeTransitionEnd will not be called to sync hash post animation
      syncHash();
    }
  };

  useEffect(() => {
    slideToLocation(swiper);
  }, [swiper, location]);

  const moveToTab = (index: number) => {
    const tab = tabs.at(index);

    if (tab) {
      routingNavigate(tab.route);
      setCurrentTab(index);
      navSwiper?.slideTo(index);
    }
  };

  return (
    <>
      <Nav
        currentTab={currentTab}
        // swiper={swiper}
        moveToNextTab={() => {
          // swiper?.slideNext();
          const newTab = currentTab + 1;
          if (newTab < tabs.length) {
            moveToTab(newTab);
          }
        }}
        moveToPreviousTab={() => {
          // swiper?.slidePrev();
          const newTab = currentTab - 1;
          if (newTab >= 0) {
            moveToTab(newTab);
          }
        }}
        moveToTab={moveToTab}
        tabs={tabs}
        setNavSwiper={setNavSwiper}
      />

      <Routes>
        {tabs.map((tab) => (
          <Route path={tab.route} element={tab.node} />
        ))}
      </Routes>

      {/* <Swiper
        modules={[Controller, EffectCoverflow]}
        //
        shortSwipes={false}
        allowTouchMove={false}
        spaceBetween={10}
        controller={{ control: navSwiper }}
        // simulateTouch={true}
        // navigation
        // modules={[Navigation]}
        effect={"coverflow"}
        // modules={[EffectCoverflow]}
        // modules={[EffectCube]}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onSlideChangeTransitionEnd={() => {
          syncHash();
        }}
        onSlideChange={(swiper) => {
          setCurrentTab(swiper.activeIndex);
        }}
      >
        {tabs.map((tab) => (
          <SwiperSlide key={tab.title}>{tab.node}</SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
};
