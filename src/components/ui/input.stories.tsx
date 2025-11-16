import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from './input';

const InputMeta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    secure: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    // eslint-disable-next-line react/display-name
    (Story) => (
      <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default InputMeta;

type Story = StoryObj<typeof Input>;

const InputWithState = (props: any) => {
  const [value, setValue] = useState(props.initialValue || '');
  return <Input {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
  render: (args) => <InputWithState {...args} />,
};

export const Email: Story = {
  args: {
    placeholder: 'Email address',
  },
  render: (args) => <InputWithState {...args} />,
};

export const Password: Story = {
  args: {
    placeholder: 'Password',
    secure: true,
  },
  render: (args) => <InputWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: (args) => <InputWithState {...args} />,
};

export const WithValue: Story = {
  args: {
    placeholder: 'Name',
  },
  render: (args) => <InputWithState {...args} initialValue="John Doe" />,
};
