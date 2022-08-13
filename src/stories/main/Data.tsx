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
import { useLocation, useNavigate } from "react-router-dom";

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
  const [newTab, setNewTab] = useState<number>(0);
  const [navSwiper, setNavSwiper] = useState<Swip | undefined>();
  const [swiper, setSwiper] = useState<Swip | undefined>();
  const location = useLocation();
  const navigate = useNavigate();
  const slideToLocation = (swiper?: Swip) => {
    console.log(`nav is ${location.pathname}`)
    let tabIndex = tabs.findIndex((tab)=> tab.route == location.pathname)
    if (!swiper) {
      console.log("too early to slide :(")
    }
    if (tabIndex >= 0) {
      swiper?.slideTo(tabIndex);
    }
  }

  useEffect(() => {
    slideToLocation(swiper)
  }, [swiper, location])
  
  useEffect(() => {
    let tab = tabs[currentTab]
    navigate(tab.route)
  }, [currentTab])

  return (
    <>
      <Nav
        currentTab={currentTab}
        swiper={swiper}
        tabs={tabs}
        setNavSwiper={setNavSwiper}
      />
      <Swiper
        modules={[Controller, EffectCoverflow]}
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
        onSlideChange={(swiper) => {
          setCurrentTab(swiper.activeIndex);
        }}
      >
        {tabs.map((tab) => (
          <SwiperSlide key={tab.title}>{tab.node}</SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiping
          currentTab={currentTab}
          onChangeTab={setCurrentTab}
          newTab={newTab}
          onChangeNewTab={setNewTab}
          tabs={tabs}
        ></Swiping> */}
    </>
  );
};
