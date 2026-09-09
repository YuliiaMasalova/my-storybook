import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Input } from './Input';
import { AtSignIcon } from './icons/AtSignIcon';
import { SearchIcon } from './icons/SearchIcon';
import { XIcon } from './icons/XIcon';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    startIcon: { control: false },
    endIcon: { control: false },
  },
  args: {
    onChange: fn(),
    label: 'Email*',
    placeholder: 'ex. email@domain.com',
    helperText: 'One lowercase character',
    startIcon: <AtSignIcon />,
    endIcon: <XIcon />,
  },
  decorators: [(Story) => <div style={{ width: 320 }}>{Story()}</div>],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focused: Story = {
  parameters: { docs: { description: { story: 'Click into the field — the focus ring is a real `:focus-within` state.' } } },
};

export const Filled: Story = {
  args: { defaultValue: 'jane@doe.com' },
};

export const Error: Story = {
  args: { error: true, defaultValue: 'jane@doe.com' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'jane@doe.com' },
};

export const Search: Story = {
  args: {
    label: undefined,
    helperText: undefined,
    startIcon: undefined,
    endIcon: <SearchIcon />,
    placeholder: 'search',
  },
};

export const Password: Story = {
  args: {
    label: 'Password*',
    helperText: 'At least one lowercase character',
    startIcon: undefined,
    endIcon: undefined,
    type: 'password',
    placeholder: 'password',
  },
};

/** Full state matrix, mirroring the Figma component set (node 2087:1117). */
export const AllStates: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <Input {...args} />
      <Input {...args} defaultValue="jane@doe.com" />
      <Input {...args} error defaultValue="jane@doe.com" />
      <Input {...args} disabled defaultValue="jane@doe.com" />
    </div>
  ),
};
