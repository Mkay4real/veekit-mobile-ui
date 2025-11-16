import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Text from './text';

const TextMeta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info',
        'neutral',
      ],
    },
    size: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
    },
    highContrast: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'Primary Text',
    color: 'primary',
    size: 5,
  },
};

export const Success: Story = {
  args: {
    children: 'Success Text',
    color: 'success',
    size: 5,
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Text',
    color: 'warning',
    size: 5,
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Text',
    color: 'danger',
    size: 5,
  },
};

export const LargeText: Story = {
  args: {
    children: 'Large Text',
    size: 9,
    weight: 'bold',
  },
};

export const SmallText: Story = {
  args: {
    children: 'Small Text',
    size: 1,
  },
};

export const HighContrast: Story = {
  args: {
    children: 'High Contrast Text',
    color: 'primary',
    size: 5,
    highContrast: true,
  },
};
