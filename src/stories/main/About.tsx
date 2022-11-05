import { FunctionComponent } from "react";
import { Header3, Text } from "./Text";

export const About: FunctionComponent = () => (
  <div className="container mx-auto max-w-prose">
    <Header3>This site</Header3>
    <Text>
      This is resume as code written as a React SPA based on vite framework and
      using tailwind to style it.
    </Text>
    <Text>
      It is built with Github Actions and deployed to
      Github Pages, where it is distributed as a static site.
    </Text>
    <Text>
      I am mostly doing this for fun, but also to try these technologies while
      making something interesting. This is a primary way of learning for me -
      through making stuff.
    </Text>
    <Header3>Me</Header3>
    <Text>
      I have been born in Russia, raised in regional capital and then moved to
      Moscow for education. During university years I have started working as a
      software developer.
    </Text>
    <Text>
      After graduating with master degree from MIPT (Moscow Institute of Physics
      and Technology) I served one year in army and two years later moved to
      Germany, Munich, where I live presently.
    </Text>
    <Text>
      My mothertongue is Russian. I have learned English from books,
      documentation, films and work. I did learn a bit of Spanish in unversity
      and Japanese myself. Currently I am learning German.
    </Text>
    <Text>
      When possible, I prefer to learn technology by doing rather than going
      through tutorials, workshops, books, etc.
    </Text>
    <Text>
      When tech stack choice is available, I prefer tools, which reduce cognitive
      load as much as possible, while remain flexible. For example I would rather
      use strong statically typed programming language, because in the end IMO 
      it helps to save a lot of "brain power" by preventing bugs through more 
      clear structure of code and compiler checks. 
    </Text>
    <Text>
      I am not afraid of exploring new technologies and approaches if using them 
      clearly improves the quality or other metrics of project success. However, 
      I am driven by impact of my work and would rather choose 
      [boring technology](https://mcfunley.com/choose-boring-technology)
      for the majority of cases over chasing shiny things.
      Say, for example, before chasing things like datalakes or super scalable
      nosql distributed databases, I would ask if the task could be faster 
      and easier solved by good-old well understood SQL database.
    </Text>
  </div>
);
