import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Avatar from './avatar';

const AvatarMeta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
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
  },
  decorators: [
    (Story) => (
      <View
        style={{
          padding: 20,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default AvatarMeta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    initials: 'AB',
    size: 3,
  },
};

export const Primary: Story = {
  args: {
    initials: 'JD',
    color: 'primary',
    size: 3,
  },
};

export const Success: Story = {
  args: {
    initials: 'SM',
    color: 'success',
    size: 3,
  },
};

export const Warning: Story = {
  args: {
    initials: 'WR',
    color: 'warning',
    size: 3,
  },
};

export const Small: Story = {
  args: {
    initials: 'AB',
    size: 1,
  },
};

export const Large: Story = {
  args: {
    initials: 'AB',
    size: 7,
  },
};
