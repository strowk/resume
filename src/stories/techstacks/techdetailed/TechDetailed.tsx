import React from "react";
import ReceivingScroll from "../../../components/ReceivingScroll";
import { Text } from "../../main/Text";

const SCALA = `
I have been using Scala on [one project](/timeline#vehicle-telemetry-collection) for 
several months. We were developing several existing services based on Kafka 
Streams and partially Akka Streams. New services we would usually base on Akka Streams
due to their simplicity. Instead of sbt we were using Maven and heavilty relied on
scalatest for all kinds of testing. Akka Http was used as well for those services,
which needed to expose API to frontend. Mostly work that services were doing involved
stream processing of huge amounts of data, while applying filters based on configurations
set by users from frontend.`;

const SEED = `
For Seed framework I have built an [interactive playground](https://ide.play-seed.dev/), where you
could try out some simple scenarios. Rust is used there for backend, where I based my work
on existing Rust Playground backend. For frontend this system is forking WebAssemblyStudio, 
which was made outside of Rust ecosystem as a playground for WebAssembly specifically. 
I managed to make those two projects to work together in the place where they intersect - 
building Rust application and then running it using WebAssembly directly in browser.

I made some other projects with Seed, such as [seed-icons](https://crates.io/crates/seed-icons)
- library for typed icons importing from Font Awesome and Material Icons and corresponding
[browser](https://strwrite.gitlab.io/seed-icons-browser/) of those icons. 
Website of [git-compose](http://git-compose.gitlab.io/) tool was
also made using Seed framework (though tool itself is on Golang ATM).
`;

const SPRING_BOOT = `I have been using Spring Boot in many projects, 
usually in microservices using database via Spring Data. I am
comfortable writing applications of any complexity, solving any
concurrency issues, write unit or integration tests, deploy and
maintain Java based services in the cloud. I have been working in
existing big applications based only on Spring as well as creating
new Spring Boot based services from scratch. On one of projects
I was also developing several libraries exposing functionality 
to Spring Boot based services, which could automatically wire into
context once developer had included "starter" dependency.`;

const TechDetailed: React.FC = () => {
  return (
    <>
      <ReceivingScroll id="java">
        <TechItemDetailed title="Java">
          <Text
            text={`
I have been working with Java from the start of my career. During
[university days](/timeline#degree-of-bachelor-of-applied-math-and-physics) my future employer Netcracker Technologies have
been organizing a special classes, which I have attended. We learned
about JavaSE for one semester and JavaEE (mostly EJB 3) for another.

When I started working in that company, for couple of years me and
my team have been supporting a big monolith solution based on
Weblogic, which heavily relied on both EJB 2 and 3, with some
additional usage of jsp. Later, when I started working with cloud
platform, I received a lot of Spring Boot knowledge in microservice
architecture. 

${SPRING_BOOT}

If possible I prefer to use Gradle to Maven, but if need be I 
can manage either one ofthose. 
I have started using Java, while Ant was still popular, then
learned a lot of Maven and was using it mostly, however since I have
tried Gradle, I've always felt it superior.
            `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>
      <ReceivingScroll id="typescript">
        <TechItemDetailed title="Typescript">
          <Text
            text={`
I have started working with Typescript within one of React frontend 
SPA's. I liked using it much more than Javascript, thanks to advanced
type system. I have used it in several frontend projects, as well as 
made a couple of NodeJS based applications using Typescript.
One of those was using Express framework to provide HTTP API and 
another one providing custom logic as AWS Lambda, terminating one
of AWS API Gateway endpoints.
The latest big Typescript project I have been working on is about
[facility management](/timeline#facility-management) and is 
organised as a monorepo with several NetsJS based microservices, 
frontend SPA based on Angular, shared libraries and couple NodeJS
based Azure Functions. I regularly work with all of those parts in
that project.
            `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>
      <ReceivingScroll id="kotlin">
        <TechItemDetailed title="Kotlin">
          <Text
            text={`
The first time I was exposed to Kotlin when developers of
that language were showing it on the conference of Java programmers.
I was interested in several features they presented and tried to make 
a [small application](/sides#trustmatrix), which would be working in 
browser (complied to JS) as well as installable as desktop app (with JavaFX based UI).

At some later point I had a [production experience](/timeline#electric-vehicles-charging-management) 
with Kotlin developing several backend services for about a year total. Those services were
based on Spring Boot, used various Spring libraries to interface with
PostgreSQL database (Spring Data) and Kafka (Spring Kafka, Spring Cloud Kafka Binder),
as well as some small interface with AWS (using AWS SSM Parameters to pass configs).
            `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>
      <ReceivingScroll id="scala">
        <TechItemDetailed title="Scala">
          <Text text={SCALA}></Text>
        </TechItemDetailed>
      </ReceivingScroll>
      <ReceivingScroll id="go">
        <TechItemDetailed title="Golang">
          <Text
            text={`
I really like writing on Golang, it is quite simple and fun, while still preserving
certain guarantees from static type system. I have started using it for one of 
microservices within [database as a service](/timeline#database-as-a-service) platform.
The microservice was responsible for managing elasticsearch cluster. All service 
functionality was very thoroughly tested with help of goconvey library, which allows
to run tests automatically on each changed file and see results conveniently presented
in browser. Automatic run of tests is quite effective due to golang simplicity and 
compiler's heavy focus on optimization.

Later I would use Golang to build a small tool for automatic testing of an 
[IoT application](/timeline#streetlighting), connecting street lights to cloud based
smart city platform. Auto tests were implemented in e2e fashion - the tool I made
was able to preconfigure actual device with certain parameters (such as f.e. current time)
before instructing one of microservices to upload configuration of required dimness
based on time. Then tool would gradually change time, so that developer could visually
confirm that light dimness is changing correctly according to schedule. Tool would 
check the changing values as well, however we often needed manual observation made too,
while chasing bugs and inconsistencies. Some time later I was using this tool for 
demonstration of platform on one of fares organized by Reply AG.

Another use of Golang was for bigger [smart city platform](/timeline#smart-city-analytics-platform),
where it was a main language for a bunch of microservices ingesting data in a similar
structured fashion from several very different sources of sensor values supplying 
current or historical information about situation in city: weather, air pollution,
auto traffic on roads, etc. I was actively involved in making first of those microservices
(for air pollution data) and made a lot for setting up data pipeline, which would later
be a base for several other similarly structured data ingestors. Our ingestors usually 
buffer incoming raw data in RabbitMQ queues and transfer it to later to Kafka after
enriching with some additional metadata. The way information was structured was important
for later data engineering and we were using International Data Spaces abstractions for
that. For serializing data-points internally we would use protobuf and later JSON when 
finally ingesting to Kafka. JSON serialization, however, was using same 'proto' specification.

I also used Golang to make a [small CLI tool of my own](http://git-compose.gitlab.io/) to manage 
a bunch of local repositories
using format similar to docker-compose yaml files: git-compose.yaml. I did not work much on 
that tool recently and I know it still has one bug coming from underlying library. I have 
a plan to rewrite that tool to rust eventually.
            `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>
      <ReceivingScroll id="rust">
        <TechItemDetailed title="Rust">
          <Text
            text={`
Rust is my favoring language, as it is for many many other developers. I have only worked 
with Rust on my own unfortunately, never on my day job. I find Rust type system one of the 
most superior as well as its approach to memory management, immutability, etc.

I have started playing around with one of frontend frameworks based on Rust, called Seed.
One of interesting Rust features is a lot of support for WebAssembly, which allows to use
that language in browsers. Seed is one but many frameworks leveraging this. 
${SEED}

One of activities I was involved in my day job is organizing IoT workshop for students.
To simplify process of going through workshop I have prepared cloud-based coding space
using one of VSCode for Web distributions. The workshop requires certain management to
rollout infrastructure (such as creating k8s namespaces, sending emails with access
to participants). Those management activities are partially automated with the use
of Rust-based CLI tool I have made specifically for this purpose.

Another Rust project I have been working on is a [small CLI tool](/sides#probranchinator)
to get an overview of conflicts between branches in git repository. I have been
mainly using it myself due to one of my projects having a lot of active branches
and CI process was causing issues with merge conflicts, so the overview was needed.
After some short search I've come to conclusion that there is no tool which would
provide such overview in a convenient way, so I have made one myself.
            `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>
      <ReceivingScroll id="lua">
        <TechItemDetailed title="Lua">
          <Text
            text={`
I have played with Lua Script while making games in my free time. There is some info about
those within [this website](/sides#games). Unfortunately UGC platform I was using for
publishing those games is no longer available. I have also used Lua for some small
scripting tasks in my day job when it was needed to process requests going through
the service mesh (Istio, Envoy Proxy) and add some additional metadata to them.
I don't think my knowledge of Lua is very deep, though it is quite a simple language.
            `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="spring-boot">
        <TechItemDetailed title="Spring Boot">
          <Text text={SPRING_BOOT}></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="nestjs">
        <TechItemDetailed title="NestJS">
          <Text
            text={`
On one of [recent projects](/timeline#facility-management) I have used NestJS
extensively with multiple microservices and one internal library based on 
that framework as well as several Azure Functions (serverless platfrom in Azure).

NestJS is a framework that is often used in NodeJS ecosystem. I have experience
of using it to build REST APIs and GRPC services. It is pretty simple and convenient
to use, though I would not say it is my favorite framework. I would prefer to use
Rust for backend development, but NestJS is a good choice for NodeJS.
I have also written a lot of Jest tests with NestJS, using its standard
testing library, both as a unit and integration tests. When working with databases
I have used TypeORM integrated with NestJS.`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="react">
        <TechItemDetailed title="React">
          <Text
            text={`
React is one of my favorite choices for frontend development. In fact this website is made
using React (using vite, react-router, tailwind and storybook). 

I find React in a very convenient place between flexibility and complexity. It has a great
ecosystem and is normally quite convenient to work with. Compared to vue, it might look
more complex to start working in, but it scales quite nicely with number of developers 
and increasing complexity of application. For most of new projects I would choose React as
an SPA framework.

I made several production frontend apps on React, mostly using Typescript, though one was 
already using Javascript and we did not have time to type it, unfortunately.
One of the [first apps](/timeline#city-traffic-control-platform) was a control system to
manage traffic lights and display data from sensors detecting speed, type and amount of cars
moving above it. Application was displaying available assets on the map and in table, 
updating information real-time (redux was feeded from websocket connected to RabbitMQ) 
and was able to show some historical data as well. 
I have started that app from scratch and made most of it, while later collaborating with the 
team when more features were developed after I have left the project.
Most of styles were using Material UI in this app, while some had to be slightly customized.
I have used Redux for state management (which was not RTK at that time yet unfortunately).

Another [big React appliction](/timeline#electric-vehicles-charging-management) was
already present in the project, but I have made lots of changes to it. Specific challenge
in this case was covering that application with good testing, including running them on CI.
I have used React Testing Library and Cypress for that. Cypress was also used for
availability testing of the whole deployment, which I found very convenient.
      `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="akka">
        <TechItemDetailed title="Akka">
          <Text text={SCALA}></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="vue.js">
        <TechItemDetailed title="vue.js">
          <Text
            text={`
I have made only [one application](/timeline#streetlighting) using vue.js. At first my work was
to wire it with backend, because customer have prepared the layout before we started the project.
CSS part was made with Bulma. Several features required to make new components from scratch though,
for example access management, which initially was not planned, but we identified that it is required.
System was designed as SAAS platform, so access management had corresponding requirements to support
role based access control. For state management and interaction with backend this app was using VueX.

I like Vue for its simplicity, but if application is not very small and/or requires several frontend 
developers, I would prefer to use React.
    `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="docker">
        <TechItemDetailed title="Docker">
          <Text
            text={`
I used docker in some or other capacity now routinely in almost every project in the last 6 or so years.
I have experience using docker for delivery and running of backend services, for containerized CI/CD
and just simply for quickly getting a necessary technology I need to test on my machine.

When making local environments I prefer using docker-compose. In couple of projects I had very good 
experience of making production-grade images specific for Java using jib library. I also have some 
experience making multi-stage builds with statically compiled Golang-based images. Though I prefer 
images to be based on alpine, in certain situations I have made some images from scratch base.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="aws">
        <TechItemDetailed title="AWS">
          <Text
            text={`
I have extensive experience working with various AWS services, such as ECS (Fargate or EC2 based),
EKS, DynamoDB, RDS (usually Postgres, Aurora), Lambda, Cloudformation, S3, MSK, API Gateway and others. 

I have been building services deployed on AWS for several projects different in sizes and certain
specifics, such as serverless or not, ECS-based or EKS, etc. I am comfortable using AWS Webconsole
or AWS CLI, depending on the task at hand.

When I can intergate with AWS from different systems, for example here you can see the 
[PR I made for jenkins plugin](https://github.com/jenkinsci/pipeline-aws-plugin/pull/251), 
which had issues when I was rolling out project infrastructure on China partition.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="kubernetes">
        <TechItemDetailed title="Kubernetes">
          <Text
            text={`
I am a certified Kubernetes administrator (CKA by CNCF). 

I started working with Kubernetes under Openshift some years ago and since then used it in
different installations and situations, cloud based (EKS, AKS, custom based on EC2 or Openstack,
custom made over GKE compute) and not (k3s, k3d, minikube, half-manual installation with kubeadm 
or fully manual aka "Kuberenetes the hard way"). 

I could relatively quickly diagnose issues, administer clusters, build an architecture, develop or
help other do the same in k8s environment. I have certain experience in helm, including 
[open source contribution](https://github.com/coder/code-server/pull/3393) to one of public charts. 
On most of projects with k8s I would use helm for managing IaC, sometimes combined with 
terraform. I have used kustomize as well once. 
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="terraform">
        <TechItemDetailed title="Terraform">
          <Text
            text={`
I have been using terraform on a several projects, sometimes defining all resources directly
(with help of providers of course), sometimes through public modules. I can design IaC of any
complexity using terraform, analyze and fix any issues that could happen (f.e. figure out
what to do when state management got fixed on lock being stuck due to ungraceful termination, etc).
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="cloudformation">
        <TechItemDetailed title="Cloudformation">
          <Text
            text={`
I have been using vanilla Cloudformation via standard YAML templates on several projects,
though nowadays I would prefer to describe CF based IaC using CDK. I can support complex 
stacks if needed, correct any issues, like stacks stuck in UPDATE_ROLLBACK_FAILED state.
In different projects I have experience of defininig stacks with ECS services, RDS databases,
S3 buckets, MSK clusters, API Gateways, etc.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="cdk">
        <TechItemDetailed title="CDK">
          <Text
            text={`
Mostly I have experience with CDK via Typescript, though I have tried couple of times
Java-based CDK apps as well. I used CDK on two different projects and found it
one of the most convenient tools for IaC so far, except for its vendor-lock on AWS
(I have heard of CDK TF, but never got to try it yet).
I have experience making CDK based Codepipelines in AWS deploying Fargate services
with databases in RDS and/or DynamoDB as well as serverless applications on AWS Lambda, 
using escape-hatches to adjust resources with AOP when needed, defining custom resources,
such as f.e. Datadog monitors tracking some of metrics from AWS, or Kafka topics, etc.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="kafka">
        <TechItemDetailed title="Kafka">
          <Text
            text={`
Almost all IoT projects I have been working so far had been using Kafka as a bus
for devices to write to and services to communicate with each other. I have some experience
of using Event Sourcing approach on Kafka as well, though not so extensive.
On [one of projects](/timeline#vehicle-telemetry-collection) I have been also using
a lot of Kafka Streams, wrapping business logic into stream processing, using KTables
and their changelog topics for further processing, etc.
I am comfortable integrating Kafka into Spring Boot based services with Kotlin and Java,
Akka based services with Scala, Golang services, using CLIs such as standard tools 
kafka-topics, kafka-consumer-groups or kcat (kafkacat). I understand core concepts such
as topics, partitions, consumer groups, rebalancing, keys, etc. I am able to diagnose 
and fix common issues of various complexity, such as f.e. slow consumer causing offset
commits to fail due to client missing hearbeat after timeout on batch processing and such.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="rabbitmq">
        <TechItemDetailed title="RabbitMQ">
          <Text
            text={`
I have used RabbitMQ on several projects, I am used to designing structure of exchanges
and queues from scratch as well as getting into existing structure if needed. 
I prefer to keep somewhere well documented structure connecting exchanges and 
queues in order to have a better understanding of how the pipeline is. 
I have experience with using RabbitMQ from services development side as well as
deploying and managing it (f.e. with helm/k8s or Fargate on AWS). I have used 
RabbitMQ from Spring Boot (Java), Golang and with other tools such as benthos.

On one [interesting project](/timeline#city-traffic-control-platform) I have built a
system for live-updates in React SPA, where SPA was securely connecting to RabbitMQ
via Stomp over Websocket and getting new data from queues connected to exchanges
with support of access management, which was using roles in the format of RabbitMQ
key bindings, f.e. '<country code>.<region code>.\\*.\\*.\\*' would designate permission
to be able to access any object within certain country region. Backend supported updating
key bindings whenever roles were changed in Keycloak (which had a plugin notifying
about changed roles through the same RabbitMQ, though on separately secured host).
Ensuring that whole system was properly secured, including configuring the right
access within RabbitMQ itself, creating users within RabbitMQ corresponding to 
OIDC registered users in Keycloak, and so on - was quite a challenge.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="aws-iot">
        <TechItemDetailed title="AWS IoT">
          <Text
            text={`
I only have a passing experience with AWS IoT in two projects, which I have not
been involved in 100 percent. One of those was workshop for students, where AWS
IoT was used to expose secured MQTT broker connecting to Raspberry PI device,
talking to which was the main task of the workshop. I was in charge of managing
EKS-based interactive cloud coding environment (based on VS Code for Web).
Coding environment had mounted TLS credentials tied to certificate managed by AWS IoT.

Another time I was working with AWS IoT was for one of Edge computing projects,
where I was helping another colleague to figure out how AWS Greengrass is working
and establish testing bench for experiments with that system. I was doing it maybe
for several days, it was kinda fun. I had some experience with Azure IoT Edge,
so I partly knew what to expect, though some AWS specifics took time to adjust to.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="lorawan">
        <TechItemDetailed title="LoraWAN">
          <Text
            text={`
I have been using LoraWAN on my [first IoT project](/timeline#streetlighting)
in order to connect streetlights to the cloud. I have experience integrating
with Loraserver (nowadays called Chirpstack) and writing Java based service
able to marshal and unmarshal data from LoraWAN devices, pass it forward to
application layer and complete the whole cycle by integrating with frontend SPA.`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="gitlab">
        <TechItemDetailed title="Gitlab">
          <Text
            text={`
I have a lot of experience working with Gitlab CI/CD, writing customized pipelines,
optimizing them, integrating with various tools. 
Example pipelines I have made:
- [git-compose](https://gitlab.com/git-compose/git-compose/-/blob/master/.gitlab-ci.yml)
- [drawio-gitlab-ci](https://gitlab.com/strwrite/drawio-gitlab-ci/-/blob/master/.gitlab-ci.yml)
- [seed-icons-browser](https://gitlab.com/strwrite/seed-icons-browser/-/blob/master/.gitlab-ci.yml)
- [seed-icons](https://gitlab.com/strwrite/seed-icons/-/blob/master/.gitlab-ci.yml)
- [trustmatrix](https://gitlab.com/strwrite/trustmatrix/-/blob/master/.gitlab-ci.yml)
- [seed-playground-site](https://gitlab.com/strwrite/seed-playground-site/-/blob/master/.gitlab-ci.yml)

These are mostly for my own projects, but I have also been working with Gitlab CI/CD
on [several enterprise projects](/timeline#smart-city-analytics-platform), 
where I have setup pipelines for complete cycle of building, testing, deploying
and managing infrastructure. I have been using Gitlab CI/CD with Docker, Kubernetes,
AWS, Terraform, Helm, Java (both Maven and Gradle), Golang, Python, etc. 
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="jenkins">
        <TechItemDetailed title="Jenkins">
          <Text
            text={`
I have a lot of experience with Jenkins, on several [projects](/timeline#vehicle-telemetry-collection).
Generally I prefer if possible to use Gitlab CI/CD, but if it is required, dealing
with Jenkins is also possible, as long as pipeline can be conveniently containerized
and cluster is not too stretched. I have some experience making custom plugins for Jenkins
too, as well as a  
[small open source contribution](https://github.com/jenkinsci/pipeline-aws-plugin/pull/251).
I haven't done much with Jenkins lately, but I am sure I can get back to it if needed.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="aws-codepipeline">
        <TechItemDetailed title="AWS Codepipeline">
          <Text
            text={`
[One of IoT projects](/timeline#electric-vehicles-charging-management) 
heavily used AWS Codepipeline and I was responsible
for keeping it up and running, as well as adding new additional stages to it
when needed and improving the time it took from developers flow.
I find the whole experience somewhat more clunky than Gitlab CI/CD, but it can
do its job if proper care taken. I have setup vanilla pipelines and CDK ones (which
update themselves based on changes in CDK code).
In that project AWS Codebuild was also used, which is a natural choice for AWS Codepipeline,
but for keeping source, project was already using Bitbucket.
`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="redux">
        <TechItemDetailed title="Redux">
          <Text
            text={`
I have used Redux on several projects, in [one of them](/timeline#city-traffic-control-platform)
I have setup the whole frontend structure from the scratch and used Redux within
React to application central state. Actions to Redux store would be
dispatched from several places, one of them was websocket client (with stomp.js on top).

In [another project](/timeline#electric-vehicles-charging-management) the state was
already managed by Redux, but I have added some new actions and reducers to it as
well as connected it to new React components. `}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="mobx">
        <TechItemDetailed title="MobX">
          <Text
            text={`
I have used MobX mostly on couple personal projects and additionally helped
colleagues to set it up together with a lot of other frontend structure in
one of new projects, which I have only worked on during its starting phase.`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="cypress">
        <TechItemDetailed title="Cypress">
          <Text
            text={`
I used Cypress in most of frontend projects where I was working with a
team. I have written a lot of tests, modified and refactored some of
tests that were broken, integrated Cypress into pipelines on several
projects. I often guide other team members on how to write tests using
Cypress, structure them and how to make them more robust (data-testid and such).
I also have some experience using plugins that compare screenshots (snapshots),
such as percy.io and cypress-image-snapshot.`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="junit">
        <TechItemDetailed title="Junit">
          <Text
            text={`
I used Junit in almost every JVM project I have been working in 
(except Scala ones, where there is more convenient scalatest).
I have experience with both Junit 4 and 5 as well as migrating
to the newer one. I used Junit for both unit and integration tests
(with arquillian and not).`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="scalatest">
        <TechItemDetailed title="Scalatest">
          <Text
            text={`
Scalatest is a very convenient testing framework for Scala-based
applications, which I have used in [one of projects](/timeline#vehicle-telemetry-collection)
quite extensively.`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>

      <ReceivingScroll id="arquillian">
        <TechItemDetailed title="Arquillian">
          <Text
            text={`
I have been using arquillian to make several integration tests for
various microservices, though that was in the [project](/timeline#database-as-a-service)
quite awhile ago.

I have also [contributed](https://github.com/arquillian/arquillian-cube/pull/872) a
feature to one of arquillian components, which I needed because our project
was deployed to several Openshift namespaces and within the test I needed to
interact with several of them.`}
          ></Text>
        </TechItemDetailed>
      </ReceivingScroll>
    </>
  );
};

const TechItemDetailed = ({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) => (
  <>
    <h3 className="text-center pt-5 pb-3 text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
      {title}
    </h3>
    {children}
  </>
);

export default React.memo(TechDetailed);
