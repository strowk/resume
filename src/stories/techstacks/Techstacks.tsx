import { SkillBadge } from "./skillbadges/SkillBadge";
import { SkillBadgesGroup } from "./skillbadges/SkillBadgesGroup";

export const TechnicalSkills = () => (
  <>
    {/* <h2 className="py-5 text-4xl font-semibold text-center">
      <span className="border-b-4 border-gray-900">Tech Skills</span>
    </h2> */}

    <SkillBadgesGroup name="Languages">
      <SkillBadge value="Java"></SkillBadge>
      <SkillBadge value="Typescript"></SkillBadge>
      <SkillBadge value="Kotlin"></SkillBadge>
      <SkillBadge value="Scala"></SkillBadge>
      <SkillBadge value="Go"></SkillBadge>
      <SkillBadge value="Rust"></SkillBadge>
      <SkillBadge value="Lua"></SkillBadge>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Frameworks">
      <SkillBadge value="Spring Boot"></SkillBadge>
      <SkillBadge value="React"></SkillBadge>
      <SkillBadge value="Akka"></SkillBadge>
      <SkillBadge value="vue.js"></SkillBadge>
      <SkillBadge value="seed-rs"></SkillBadge>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Cloud">
      <SkillBadge value="Docker"></SkillBadge>
      <SkillBadge value="AWS"></SkillBadge>
      <SkillBadge value="Kubernetes"></SkillBadge>
      <SkillBadge value="terraform"></SkillBadge>
      <SkillBadge value="Cloudformation"></SkillBadge>
      <SkillBadge value="CDK"></SkillBadge>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Middleware">
      <SkillBadge value="Kafka"></SkillBadge>
      <SkillBadge value="Kafka Streams"></SkillBadge>
      <SkillBadge value="RabbitMQ"></SkillBadge>
      <SkillBadge value="AWS IoT"></SkillBadge>
      <SkillBadge value="AWS IoT Core"></SkillBadge>
      <SkillBadge value="LoraWAN"></SkillBadge>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="CI/CD">
      <SkillBadge value="Gitlab"></SkillBadge>
      <SkillBadge value="Jenkins"></SkillBadge>
      <SkillBadge value="AWS Codepipeline"></SkillBadge>
      <SkillBadge value="AWS Codebuild"></SkillBadge>
    </SkillBadgesGroup>

    <SkillBadgesGroup name="Misc">
      <SkillBadge value="Redux"></SkillBadge>
      <SkillBadge value="MobX"></SkillBadge>
      <SkillBadge value="Cypress"></SkillBadge>
      <SkillBadge value="Junit"></SkillBadge>
      <SkillBadge value="scalatest"></SkillBadge>
      <SkillBadge value="arquillian"></SkillBadge>
    </SkillBadgesGroup>
  </>
);
