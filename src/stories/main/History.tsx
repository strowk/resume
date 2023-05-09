import React from "react";
import { Timeline } from "../timeline/Timeline";

const History = () => (
  <Timeline
    items={[
      {
        type: "project",
        title: "Facility Management",
        text: "Tracking of tickets to manage offices and other facilities",
        techs: [
          "Typescript",
          "Angular",
          "NodeJS",
          "Azure",
          "Azure Devops",
          "Kubernetes",
        ],
      },
      {
        type: "upgrade",
        title: "Promoted to Senior Consultant",
        text: "",
        tooltip: "Promotion",
        date: new Date("2021-12-15"),
      },
      {
        type: "project",
        title: "Electric Vehicles Charging Management",
        text: "Control of charging and battery analytics for fleets of fully electric buses and trucks",
        techs: [
          "Kotlin",
          "React",
          "Typescript",
          "AWS Fargate",
          "AWS RDS Aurora",
          "AWS Cloudformation",
          "AWS Codepipeline",
          "AWS Codebuild",
        ],
      },
      {
        type: "project",
        title: "Vehicle Telemetry Collection",
        text: "Stream processing of telemetry from millions of cars",
        techs: [
          "Scala",
          "Akka",
          "Kafka Streams",
          "React",
          "Javascript",
          "AWS",
          "Jenkins",
        ],
      },
      {
        type: "upgrade",
        title: "Certified Kubernetes Administrator by CNCF",
        text: "CKA-2000-006435-0100 , scored 94%",
        tooltip: "Certification",
        date: new Date("2020-03-13"),
      },
      {
        type: "project",
        title: "Smart City Analytics Platform",
        text: "Streaming data from integrations into data lake and real time analytics",
        techs: ["Golang", "RabbitMQ", "Kafka", "AWS S3", "Gitlab"],
      },
      {
        type: "project",
        title: "City Traffic Control Platform",
        text: "Displaying live data from city traffic control system",
        techs: [
          "React",
          "Typescript",
          "Java",
          "Spring Boot",
          "RabbitMQ",
          "Kafka",
          "Gitlab",
        ],
      },
      {
        type: "project",
        title: "Streetlighting",
        text: "Central control of city smart streetlights infrastracture via LoraWAN",
        techs: ["LoraWAN", "Vue.js", "Java", "Spring Boot", "RabbitMQ"],
      },
      {
        type: "newJob",
        title: "Concept Reply GmbH",
        text: "Started working as IoT Backend Developer (Consultant)",
        date: new Date("2019-03-01"),
      },
      {
        type: "project",
        title: "Database as a Service",
        text: "Automated provision and maintenance of databases on-demand",
        techs: [
          "Java",
          "Spring Boot",
          "Golang",
          "Openshift/Kubernetes",
          "Docker",
          "Postgresql",
          "MongoDB",
        ],
      },
      {
        type: "project",
        title: "Digital Marketplace",
        text: "SAAS solution to sell automated digital services",
        techs: [
          "Java",
          "Spring Boot",
          "Openshift/Kubernetes",
          "Docker",
          "Postgresql",
          "Python",
        ],
      },
      {
        type: "project",
        title: "Core Cloud Platform Automation",
        text: "Automated provision of services and integrations",
        techs: [
          "Java",
          "Spring Boot",
          "Openshift/Kubernetes",
          "Docker",
          "Postgresql",
          "Python",
          "MongoDB",
        ],
      },
      {
        type: "newJob",
        title: "Netcracker Technology Corp.",
        text: "Returned to work as a Senior Software Developer",
        date: new Date("2016-09-01"),
      },
      {
        type: "newJob",
        title: "Mandatory military service",
        text: "Served as a Senior Computer Operator in science division",
        date: new Date("2015-06-29"),
      },
      {
        type: "graduation",
        title: "Degree of Master of Applied Math and Physics",
        text: "Thesis: Selection of informative feature in the nolinear regression problem",
        date: new Date("2015-06-01"),
      },
      {
        type: "project",
        title: "Telecom Operations and Management Solutions",
        text: "Operations support for internet service providers",
        techs: ["Java EE", "JDBC", "Weblogic", "Oracle SQL", "plsql", "Spring"],
      },
      {
        type: "newJob",
        title: "Netcracker Technology Corp.",
        text: "Started working as Java Software Developer",
        date: new Date("2013-08-01"),
      },
      {
        type: "graduation",
        title: "Degree of Bachelor of Applied Math and Physics",
        text: "Thesis: Detection of biological signs in spectral analysis of a radio-electronic scan",
        date: new Date("2013-06-01"),
      },
    ]}
  ></Timeline>
);

export default React.memo(History);
