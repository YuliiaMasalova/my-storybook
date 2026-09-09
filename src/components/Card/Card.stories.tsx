import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';
import cardDemo from './assets/card-demo.jpg';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tags: { control: false },
  },
  args: {
    image: cardDemo,
    imageAlt: 'A hand holding a bitcoin coin in front of a trading-chart monitor',
    date: 'December 12, 2024',
    title: 'How I Finally Understood Crypto',
    description:
      'The story of Alex, who turned confusing signals into clear decisions thanks to wallet tracking and smart alerts.',
    tags: ['Crypto Signals', 'For Beginners'],
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  parameters: {
    docs: { description: { story: 'Hover the card — the border color change is a real `:hover` state.' } },
  },
};

export const NoTags: Story = {
  args: { tags: undefined },
};

export const NoDescription: Story = {
  args: { description: undefined, tags: undefined },
};

/**
 * Title size and card width are already responsive on their own (they read
 * tokens that switch by viewport width) — resize the Storybook viewport, or
 * the preview window, to see it: 350px/18px title below 1024px, 460px/20px
 * from 1024px, 500px/24px from 1440px. Meta text also lightens at 1440px.
 */
export const Responsive: Story = {
  parameters: { layout: 'padded' },
};
