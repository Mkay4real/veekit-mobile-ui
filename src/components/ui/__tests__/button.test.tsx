import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../button';

describe('Button', () => {
  it('renders correctly with text', () => {
    const { getByText } = render(<Button text="Click me" />);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text="Click me" onPress={onPressMock} />
    );

    fireEvent.press(getByText('Click me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with solid variant', () => {
    const { getByText } = render(
      <Button text="Solid Button" variant="solid" />
    );
    expect(getByText('Solid Button')).toBeTruthy();
  });

  it('renders with outline variant', () => {
    const { getByText } = render(
      <Button text="Outline Button" variant="outline" />
    );
    expect(getByText('Outline Button')).toBeTruthy();
  });

  it('renders with ghost variant', () => {
    const { getByText } = render(
      <Button text="Ghost Button" variant="ghost" />
    );
    expect(getByText('Ghost Button')).toBeTruthy();
  });

  it('renders with tonal variant', () => {
    const { getByText } = render(
      <Button text="Tonal Button" variant="tonal" />
    );
    expect(getByText('Tonal Button')).toBeTruthy();
  });

  it('renders in different sizes', () => {
    const sizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
    sizes.forEach((size) => {
      const { getByText } = render(
        <Button text={`${size} Button`} size={size} />
      );
      expect(getByText(`${size} Button`)).toBeTruthy();
    });
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text="Disabled" state="disabled" onPress={onPressMock} />
    );

    fireEvent.press(getByText('Disabled'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('shows loading state', () => {
    const { getByText } = render(<Button text="Loading" state="loading" />);
    expect(getByText('Loading')).toBeTruthy();
  });
});
