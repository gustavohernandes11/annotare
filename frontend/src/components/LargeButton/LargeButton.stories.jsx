import { LargeButton } from "./index.jsx";
export default {
  title: LargeButton,
  component: LargeButton,
  args: {
    children: "LargeButton",
  },
  argTypes: {
    children: { type: "string" },
  },
};
const Template = (args) => {
  return (
    <div>
      <LargeButton {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
