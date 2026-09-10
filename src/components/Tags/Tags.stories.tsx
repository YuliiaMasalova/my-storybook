import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Tags } from './Tags';

const meta = {
  title: 'Components/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    state: { control: 'radio', options: ['default', 'hover'] },
    interactive: { control: 'boolean' },
    disabled: { control: 'boolean', if: { arg: 'interactive' } },
  },
  args: {
    children: 'For Beginners',
    state: 'default',
  },
} satisfies Meta<typeof Tags>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma: `property1=Default`. */
export const Default: Story = {
  args: { state: 'default' },
};

/** Figma: `property1=hover`. Pinned via the `state` prop — real pointer `:hover` renders identically. */
export const Hover: Story = {
  args: { state: 'hover' },
};

/** Rendered as a real `<button>` — keyboard-focusable, fires `onClick`. Hover it or tab to it to see the live `:hover`/`:focus-visible` states. */
export const Interactive: Story = {
  args: { interactive: true, onClick: fn() },
};

/** Interactive tag, disabled. */
export const Disabled: Story = {
  args: { interactive: true, disabled: true, onClick: fn() },
};

/** Both Figma states side by side, mirroring node 2106:307. */
export const AllStates: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Tags {...args} state="default" />
      <Tags {...args} state="hover" />
    </div>
  ),
};
