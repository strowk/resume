import { SkillBadgeWithLink } from "./skillbadges/SkillBadge";
import { SkillBadgesGroup } from "./skillbadges/SkillBadgesGroup";
import TechDetailed from "./techdetailed/TechDetailed";
import { Text } from "../main/Text";

export const TechnicalSkills = () => (
  <>
    {/* <h2 className="py-5 text-4xl font-semibold text-center">
      <span className="border-b-4 border-gray-900">Tech Skills</span>
    </h2> */}

    <SkillBadgesGroup name="Languages">
      <SkillBadgeWithLink value="Java"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Typescript"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Kotlin"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Scala"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Go"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Rust"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Lua"></SkillBadgeWithLink>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Frameworks">
      <SkillBadgeWithLink value="Spring Boot"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="React"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Akka"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="vue.js"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="seed-rs"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="NestJS"></SkillBadgeWithLink>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Cloud">
      <SkillBadgeWithLink value="Docker"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="AWS"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Kubernetes"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="terraform"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Cloudformation"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="CDK"></SkillBadgeWithLink>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Middleware">
      <SkillBadgeWithLink value="Kafka"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="RabbitMQ"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="AWS IoT"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Azure Servicebus"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="LoraWAN"></SkillBadgeWithLink>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="CI/CD">
      <SkillBadgeWithLink value="Gitlab"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Jenkins"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="AWS Codepipeline"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="AWS Codebuild"></SkillBadgeWithLink>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Misc">
      <SkillBadgeWithLink value="Redux"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="MobX"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Cypress"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="Junit"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="scalatest"></SkillBadgeWithLink>
      <SkillBadgeWithLink value="arquillian"></SkillBadgeWithLink>
    </SkillBadgesGroup>

    <Text>
      This is not a complete list of technologies I have skills to work with,
      but just the ones most relevant. In a lot of situations I have found that
      having experience with similar tool is helping to quickly get used to
      another.
    </Text>

    <TechDetailed></TechDetailed>
  </>
);
