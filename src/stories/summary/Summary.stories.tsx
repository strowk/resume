import { ComponentStory, ComponentMeta } from "@storybook/react";

import Summary from "./Summary";

export default {
  title: "Summary",
  component: Summary,
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = (args) => (
  <Summary {...args} />
);

export const TheSummary = Template.bind({});
TheSummary.args = {
  title: "Timur Sultanaev",
  subtitle: "developer",
};
