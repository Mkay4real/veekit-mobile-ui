import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Icon } from './icon';

const IconMeta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    iconType: {
      control: 'select',
      options: ['svg', 'IonIcons', 'FontAwesome'],
    },
    color: { control: 'color' },
    size: { control: 'number' },
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

export default IconMeta;

type Story = StoryObj<typeof Icon>;

export const SVGSearch: Story = {
  args: {
    iconType: 'svg',
    icon: 'search',
    color: '#000',
    size: 24,
  },
};

export const SVGEye: Story = {
  args: {
    iconType: 'svg',
    icon: 'eye',
    color: '#000',
    size: 24,
  },
};

export const SVGEyeOff: Story = {
  args: {
    iconType: 'svg',
    icon: 'eye-off',
    color: '#000',
    size: 24,
  },
};

export const IonIconsAirplane: Story = {
  args: {
    iconType: 'IonIcons',
    icon: 'airplane',
    color: '#007AFF',
    size: 24,
  },
};

export const IonIconsSearch: Story = {
  args: {
    iconType: 'IonIcons',
    icon: 'search',
    color: '#007AFF',
    size: 24,
  },
};

export const FontAwesomeAirplane: Story = {
  args: {
    iconType: 'FontAwesome',
    icon: 'airplane',
    color: '#FF3B30',
    size: 24,
  },
};

export const FontAwesomeBattery: Story = {
  args: {
    iconType: 'FontAwesome',
    icon: 'battery-half',
    color: '#FF3B30',
    size: 24,
  },
};
