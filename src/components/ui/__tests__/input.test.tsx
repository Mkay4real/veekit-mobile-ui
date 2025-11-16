import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from '../input';

describe('Input', () => {
  it('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('calls onChange when text changes', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChange={onChangeMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Enter text'), 'test');
    expect(onChangeMock).toHaveBeenCalledWith('test');
  });

  it('calls onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChangeText={onChangeTextMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Enter text'), 'test');
    expect(onChangeTextMock).toHaveBeenCalledWith('test');
  });

  it('renders as secure text entry when secure prop is true', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Password" secure />
    );
    const input = getByPlaceholderText('Password');
    expect(input.props.secureTextEntry).toBeTruthy();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Disabled" disabled />
    );
    const input = getByPlaceholderText('Disabled');
    expect(input.props.editable).toBe(false);
  });

  it('displays the value prop', () => {
    const { getByDisplayValue } = render(
      <Input placeholder="Name" value="John Doe" />
    );
    expect(getByDisplayValue('John Doe')).toBeTruthy();
  });
});
