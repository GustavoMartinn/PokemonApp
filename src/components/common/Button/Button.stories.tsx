import { Button, ButtonProps } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}
