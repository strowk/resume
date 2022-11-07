import { FunctionComponent, useEffect, useState } from "react";
import { Swiper as Swip } from "swiper";
import { SideGigs } from "./SideGigs";
import { History } from "./History";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

import "./main.css";
import { About } from "./About";
import { Nav } from "./Navigation";
import { TechnicalSkills } from "../techstacks/Techstacks";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  ScrollAnimationHashProvider,
  useScrollAnimationHash as useScrollAnimationHash,
} from "../../hooks/UseScrollAnimationHash";

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
      title: "Side Gigs",
      node: (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 px-1 pb-4">
          <SideGigs />
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

  return (
    <ScrollAnimationHashProvider>
      <TheSwiper
        currentTab={currentTab}
        tabs={tabs}
        setNavSwiper={setNavSwiper}
        navSwiper={navSwiper}
        setCurrentTab={setCurrentTab}
      ></TheSwiper>
    </ScrollAnimationHashProvider>
  );
};

const TheSwiper = ({
  currentTab,
  tabs,
  setNavSwiper,
  navSwiper,
  setCurrentTab,
}: {
  currentTab: number;
  tabs: Array<Tab>;
  setNavSwiper: (swiper: Swip) => void;
  navSwiper?: Swip;
  setCurrentTab: (num: number) => void;
}) => {
  const location = useLocation();
  const routingNavigate = useNavigate();
  const scrollAnimationHash = useScrollAnimationHash();

  useEffect(() => {
    // syncing currentTab with location if route has changed
    const foundIndex = tabs.findIndex((it) => it.route === location.pathname);
    if (foundIndex >= 0 && foundIndex !== currentTab) {
      setCurrentTab(foundIndex);
    }
  }, [location]);

  useEffect(() => {
    // syncing navigation slider position when current tab has changed
    navSwiper?.slideTo(currentTab);
    if (scrollAnimationHash.hash !== location.hash) {
      scrollAnimationHash.setHash(location.hash);
    }
  }, [currentTab]);

  // change routing to new tab by index
  const moveToTab = (index: number) => {
    const tab = tabs.at(index);
    if (tab) {
      routingNavigate(tab.route);
    }
  };

  return (
    <>
      <Nav
        currentTab={currentTab}
        moveToNextTab={() => {
          const newTab = currentTab + 1;
          if (newTab < tabs.length) {
            moveToTab(newTab);
          }
        }}
        moveToPreviousTab={() => {
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
        <Route path="/" element={tabs.at(0)?.node} />
        {tabs.map((tab, index) => (
          <Route key={index} path={tab.route} element={tab.node} />
        ))}
      </Routes>
    </>
  );
};
