import {
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleUp,
  faBook,
  faCheckCircle,
  faCoffee,
  faDemocrat,
  faGamepad,
  faLink,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FunctionComponent } from "react";
import { Card } from "../timeline/Card";
import { Header3, Text } from "./Text";

const OpenSourceCard: FunctionComponent<{}> = ({ children }) => (
  <div className="col-span-1 mx-2">{children}</div>
);

const SideGigs = () => (
  <div className="md:px-4 mx-1">
    <Header3 value="Contributions" />
    <Text>
      Features, bugfixes, libraries and tools contributed to already existing
      codebase or ecosystem.
    </Text>
    <div className="md:grid grid-cols-2">
      <OpenSourceCard>
        <Card
          title="Play Seed"
          links={[
            {
              url: "https://ide.play-seed.dev/",
              title: "website",
            },
            {
              url: "https://docs.play-seed.dev/",
              title: "documentation",
              icon: faBook,
            },
            {
              url: "https://github.com/MartinKavik/seed-app-todomvc/pull/2",
              title: "PR",
              icon: faGithub,
            },
          ]}
          text="Interactive coding playground for Seed framework"
          icon={faCoffee}
          iconTooltip="Project"
          techs={[
            "Rust",
            "seed-rs",
            "Docker",
            "Digital Ocean",
            "traefik",
            "Gitlab CI",
          ]}
          forceIcon={true}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="seed-icons"
          text="Library with collections of icons for seed framework"
          links={[
            {
              url: "https://crates.io/crates/seed-icons",
              title: "crate",
              icon: faBook,
            },
            {
              url: "https://strwrite.gitlab.io/seed-icons-browser/",
              title: "website",
            },
            {
              url: "https://github.com/seed-rs/awesome-seed-rs/pull/15",
              title: "PR",
              icon: faGithub,
            },
          ]}
          icon={faBook}
          iconTooltip="Library"
          techs={["Rust", "seed-rs", "GraphQL"]}
          forceIcon={true}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="arquillian-cube: multiple namespaces"
          text="Support more than one namespace in one test"
          links={[
            {
              url: "https://github.com/arquillian/arquillian-cube/pull/872",
              title: "PR",
              icon: faGithub,
            },
          ]}
          icon={faArrowAltCircleUp}
          iconTooltip="Feature"
          forceIcon={true}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="code-server: init containers"
          text="Support extraInitContainers for helm chart"
          links={[
            {
              url: "https://github.com/coder/code-server/pull/3393",
              title: "PR",
              icon: faGithub,
            },
          ]}
          icon={faArrowAltCircleUp}
          iconTooltip="Feature"
          forceIcon={true}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="jenkinsci/pipeline-aws-plugin: bugfix"
          text="Fix wrong partition detection when assuming role"
          links={[
            {
              url: "https://github.com/jenkinsci/pipeline-aws-plugin/pull/251",
              title: "PR",
              icon: faGithub,
            },
          ]}
          icon={faCheckCircle}
          iconTooltip="Bugfix"
          forceIcon={true}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="cypress-hmr-restarter: bugfix"
          text="Fix wrong schema in url"
          links={[
            {
              url: "https://github.com/Svish/cypress-hmr-restarter/pull/13",
              title: "PR",
              icon: faGithub,
            },
          ]}
          icon={faCheckCircle}
          iconTooltip="Bugfix"
          forceIcon={true}
        ></Card>
      </OpenSourceCard>
    </div>

    <Header3 value="Pet Projects" />
    <Text>
      A bunch of interesting tools and stuff I made for myself, others or just
      for fun. In my repositories you can find a lot of stuff that I tried, but
      here I list only the things that actually were done to some degree.
    </Text>
    <div className="md:grid grid-cols-2">
      <OpenSourceCard>
        <Card
          title="Compose for Git"
          text="CLI tool and plugins to manage several local git repositories described in one yaml file"
          icon={faCoffee}
          iconTooltip="Project"
          techs={[
            "Golang",
            "Git",
            "VSCode Extension API",
            "Typescript",
            "GRPC",
          ]}
          forceIcon={true}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="trustmatrix: Evolutionary simultaion of Prisoner's Dilemma"
          text=""
          icon={faCoffee}
          iconTooltip="Project"
          techs={["Kotlin", "Game theory", "Gitlab CI"]}
          forceIcon={true}
          links={[
            {
              url: "https://gitlab.com/strwrite/trustmatrix",
              title: "Repo",
              icon: faGitlab,
            },
            {
              url: "https://strwrite.gitlab.io/trustmatrix/",
              title: "Demo",
              icon: faLink,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="How to transform draw.io xml to picture in Gitlab CI"
          text=""
          icon={faCoffee}
          iconTooltip="Demo"
          techs={["React", "Material UI"]}
          forceIcon={true}
          links={[
            {
              url: "https://gitlab.com/strwrite/drawio-gitlab-ci",
              title: "Repo",
              icon: faGitlab,
            },
          ]}
        ></Card>
      </OpenSourceCard>
    </div>

    <Header3 value="Games" />
    <Text>
      At some point I wanted to try myself in game design and development and
      made a bunch of games and libraries (like packages) on a platform known as
      Crayta. Crayta is accessible in Stadia and in Epic Games. Game logic is
      implemented with Lua scripts, UI widgets on html/css/js with some
      specifics (Gameface engine).
    </Text>
    <Text>
      Source code is not available as a part of version control system, however
      all games in the list below could be remixed, which allows to create own
      copy with all the same code and configurations.
    </Text>
    <div className="md:grid grid-cols-2">
      <OpenSourceCard>
        <Card
          title="Nuclear Gear Snake"
          text=""
          icon={faGamepad}
          iconTooltip="Game"
          techs={["Lua", "html", "css", "Javascript"]}
          forceIcon={true}
          links={[
            {
              url: "https://play.crayta.com/games/752238b5-6db0-4ade-b26f-579be485b37a",
              title: "Crayta",
              icon: faGamepad,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="Flight and Fight"
          text=""
          icon={faGamepad}
          iconTooltip="Game"
          techs={["Lua", "html", "css", "Javascript"]}
          forceIcon={true}
          links={[
            {
              url: "https://play.crayta.com/games/266de510-225e-4f3d-94f8-cba7d067a12f",
              title: "Crayta",
              icon: faGamepad,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="Spellfire"
          text=""
          icon={faGamepad}
          iconTooltip="Game"
          techs={["Lua", "Typescript", "html", "css", "Javascript"]}
          forceIcon={true}
          links={[
            {
              url: "https://play.crayta.com/games/e6766b4a-2eb8-4190-8e70-5729e0daf1aa",
              title: "Crayta",
              icon: faGamepad,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="Signs of Acryptica"
          text=""
          icon={faGamepad}
          iconTooltip="Game"
          techs={["Lua", "Typescript", "html", "css", "Javascript"]}
          forceIcon={true}
          links={[
            {
              url: "https://play.crayta.com/games/a73b4699-3531-41ab-97aa-870802d6bf98",
              title: "Crayta",
              icon: faGamepad,
            },
          ]}
        ></Card>
      </OpenSourceCard>

      <OpenSourceCard>
        <Card
          title="Radar"
          text=""
          icon={faBook}
          iconTooltip="Package"
          techs={["Lua", "html", "css", "Javascript"]}
          forceIcon={true}
          links={[
            {
              url: "https://forum.crayta.com/t/radar/2847",
              title: "Crayta",
              icon: faLink,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="Superhex"
          text=""
          icon={faBook}
          techs={["Lua", "html", "css", "Javascript"]}
          iconTooltip="Package"
          forceIcon={true}
          links={[
            {
              url: "https://forum.crayta.com/t/superhex/1616",
              title: "Crayta",
              icon: faLink,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="TrackMouse"
          text=""
          icon={faBook}
          iconTooltip="Package"
          techs={["Lua", "html", "css", "Javascript"]}
          forceIcon={true}
          links={[
            {
              url: "https://forum.crayta.com/t/trackmouse/1491",
              title: "Crayta",
              icon: faLink,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="Holo Target Tracker"
          text=""
          icon={faBook}
          iconTooltip="Package"
          techs={["Lua", "html", "css", "Javascript"]}
          forceIcon={true}
          links={[
            {
              url: "https://forum.crayta.com/t/holo-target-tracker/1313",
              title: "Crayta",
              icon: faLink,
            },
          ]}
        ></Card>
      </OpenSourceCard>
    </div>
  </div>
);

export default React.memo(SideGigs);
