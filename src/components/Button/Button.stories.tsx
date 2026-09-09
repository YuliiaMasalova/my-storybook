import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from './Button';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    iconPosition: { control: 'radio', options: ['left', 'right'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    // `icon` takes a ReactNode, which controls can't edit directly — expose
    // a radio of plain string keys and let Storybook resolve them to the
    // actual icon element (or nothing) via `mapping`.
    icon: {
      control: 'radio',
      options: ['none', 'arrow'],
      mapping: { none: undefined, arrow: <ArrowUpRightIcon /> },
      description: 'Icon shown in the button (mapped from a plain key so the Controls panel can edit it).',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
    variant: 'primary',
    size: 'md',
    icon: 'arrow',
    iconPosition: 'right',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const IconRight: Story = {
  args: { icon: 'arrow', iconPosition: 'right' },
};

export const IconLeft: Story = {
  args: { icon: 'arrow', iconPosition: 'left' },
};

export const IconOnly: Story = {
  args: { icon: 'arrow', children: undefined, 'aria-label': 'Open' },
};

export const TextOnly: Story = {
  args: { icon: 'none' },
};

export const Selected: Story = {
  args: { selected: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

/**
 * Full variant × state matrix, mirroring the Figma component set (node
 * 2081:1492). `Hover` and `Focused` aren't shown here since they're live
 * CSS states — try them interactively in any of the stories above.
 */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  argTypes: { children: { control: false } },
  render: () => {
    const variants = ['primary', 'secondary'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;
    const states: Array<{ label: string; props: Partial<ComponentProps<typeof Button>> }> = [
      { label: 'Default', props: {} },
      { label: 'Selected', props: { selected: true } },
      { label: 'Disabled', props: { disabled: true } },
    ];

    return (
      <table style={{ borderCollapse: 'separate', borderSpacing: 16 }}>
        <tbody>
          {variants.map((variant) => (
            <tr key={variant}>
              {sizes.map((size) => (
                <td key={size}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
                    {states.map((s) => (
                      <Button key={s.label} variant={variant} size={size} icon={<ArrowUpRightIcon />} {...s.props}>
                        {variant} · {size}
                      </Button>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};
