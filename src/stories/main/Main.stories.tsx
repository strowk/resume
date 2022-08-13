import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Main } from "./Main";

export default {
  title: "Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const TheMain = Template.bind({});
TheMain.args = {};
