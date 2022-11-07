import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleUp,
  faBook,
  faCheckCircle,
  faCoffee,
  faGamepad,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState } from "react";
import { TechnicalSkills } from "../techstacks/Techstacks";
import { Card } from "../timeline/Card";
import { Timeline } from "../timeline/Timeline";
import { Text } from "./Text";

import "./main.css";
import photo from "./photo.jpg";
import { Data } from "./Content";
import ReceivingScroll from "../../components/ReceivingScroll";
import { Link } from "react-router-dom";
interface MainProps {}

const TopSummary: FunctionComponent<{}> = () => (
  <section className="p-6 rounded-tl-3xl bg-gray-800 overflow-x-clip">
    <h3 className="pt-5 pb-3 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
      Timur Sultanaev is
    </h3>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
      <li>a full-stack developer</li>
      <li>
        , who is focused on complete cycle of delivering cloud-based services
      </li>
      <li>using DevOps practices and Agile methodology</li>
      <li>, with 8 years of working experience</li>
      <li>. Currently living in Munich (Germany)</li>
      <li>, not looking for a job change</li>
    </ul>
    <ReceivingScroll id={"contacts"}>
      <div className="mt-3 max-w-prose">
        About all opportunities, job suggestions, etc, please contact me via
        LinkedIn only:
        <p>
          <a
            href="https://www.linkedin.com/in/sultanaev-timur"
            target={"_blank"}
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>{" "}
            www.linkedin.com/in/sultanaev-timur
          </a>
        </p>
      </div>
    </ReceivingScroll>
  </section>
);

export const Main = ({ ...props }: MainProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900" {...props}>
      <div className="container mx-auto">
        <div className="grid grid-flow-col md:grid-cols-3 grid-cols-2 bg-white dark:bg-gray-800">
          <div className="col-start-1 row-span-1 col-span-1 rounded-br-3xl bg-gray-50 dark:bg-gray-900 hidden md:flex justify-center items-center">
            <div className="h-48 md:transition-[width] w-1 md:w-48">
              <img className="object-contain h-48 rounded-3xl" src={photo} />
            </div>
          </div>

          <div className="dark:text-gray-200 md:col-start-2 col-span-2 col-start-1 bg-gray-900">
            <TopSummary />
          </div>
        </div>

        {/* <div className="bg-white dark:bg-gray-800 dark:text-gray-200 p-2 md:rounded-tl-3xl">
          <TechnicalSkills />
        </div> */}

        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 md:pt-6 md:rounded-tl-3xl">
          {/* <div className="bg-white dark:bg-gray-800 dark:text-gray-200 md:pt-6">  */}
          <Data />
        </div>

        <div>
          <Link to="#contacts">Contacts</Link>
        </div>
      </div>
    </div>
  );
};
