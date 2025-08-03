import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleUp,
  faBook,
  faCheckCircle,
  faCoffee,
  faGamepad,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FunctionComponent } from "react";
import { Card } from "../timeline/Card";
import { Header3, Text } from "./Text";

const OpenSourceCard: FunctionComponent = ({ children }) => (
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
          iconTooltip="CLI Tool"
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
          title="trustmatrix"
          text="Evolutionary simultaion of Prisoner's Dilemma"
          icon={faCoffee}
          iconTooltip="Research Project"
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
          title="probranchinator"
          text="Display status of conflicts between git branches in terminal"
          icon={faCoffee}
          iconTooltip="CLI Tool"
          techs={["Rust", "clap-rs", "Git"]}
          forceIcon={true}
          links={[
            {
              url: "https://github.com/strowk/probranchinator",
              title: "Repo",
              icon: faGithub,
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
      Crayta and later in another one - dotbigbang.
    </Text>
    <Text>
      Crayta has been accessible in Stadia and in Epic Games, but facebook have
      bought and closed it. Game logic was implemented with Lua scripts, UI
      widgets on html/css/js with some specifics (Gameface engine).
    </Text>
    <Text>
      These days sometimes I work on games and play in dotbigbang platform,
      where I use Typescript for game logic and UI.
    </Text>
    <div className="md:grid grid-cols-2">
      <OpenSourceCard>
        <Card
          title="Laser Shot"
          text="Simple multiplayer game where you control a small hovercraft with a laser cannon"
          icon={faGamepad}
          iconTooltip="Game"
          techs={["Typescript"]}
          forceIcon={true}
          links={[
            {
              url: "https://dotbigbang.com/game/f213232ad9e543358b664b4931535a47/laser-shot?mp=f2132",
              title: "dotbigbang",
              icon: faGamepad,
            },
          ]}
        ></Card>
      </OpenSourceCard>
      <OpenSourceCard>
        <Card
          title="Elysium Station Defense"
          text="Single player game where you defend a space station from waves of enemies, while upgrading your spaceship"
          icon={faGamepad}
          iconTooltip="Game"
          techs={["Typescript"]}
          forceIcon={true}
          links={[
            {
              url: "https://dotbigbang.com/game/5dc23f09a27f4b4fa83841f56d26c055/elysium-station-defense",
              title: "dotbigbang",
              icon: faGamepad,
            },
          ]}
        ></Card>
      </OpenSourceCard>
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
              url: "https://craytak.it/crayta_games/3039",
              title: "CraytaKit",
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
              url: "https://craytak.it/crayta_games/2281",
              title: "CraytaKit",
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
              url: "https://craytak.it/crayta_games/4213",
              title: "CraytaKit",
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
              url: "https://craytak.it/crayta_games/355",
              title: "CraytaKit",
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
        ></Card>
      </OpenSourceCard>
    </div>
  </div>
);

export default React.memo(SideGigs);
