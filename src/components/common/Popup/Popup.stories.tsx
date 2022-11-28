import { Popup, PopupProps } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>

const Template: ComponentStory<typeof Popup> = (args: PopupProps) => (
  <Popup {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Popup title',
  text: 'Popup text ',
  top: 0,
  left: 0,
}
