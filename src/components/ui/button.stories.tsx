import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Button from './button';

const ButtonMeta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed' },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'tonal'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    state: {
      control: 'select',
      options: ['default', 'disabled', 'loading'],
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

export default ButtonMeta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    text: 'Solid Button',
    variant: 'solid',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    text: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const Tonal: Story = {
  args: {
    text: 'Tonal Button',
    variant: 'tonal',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Button',
    variant: 'solid',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Button',
    variant: 'solid',
    size: 'xl',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    variant: 'solid',
    size: 'md',
    state: 'disabled',
  },
};

export const Loading: Story = {
  args: {
    text: 'Loading Button',
    variant: 'solid',
    size: 'md',
    state: 'loading',
  },
};
