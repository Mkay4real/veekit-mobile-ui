import React from 'react';
import { render } from '@testing-library/react-native';
import Avatar from '../avatar';

describe('Avatar', () => {
  it('renders correctly with initials', () => {
    const { getByText } = render(<Avatar initials="AB" />);
    expect(getByText('AB')).toBeTruthy();
  });

  it('renders with different colors', () => {
    const colors = [
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
      'info',
      'neutral',
    ] as const;

    colors.forEach((color) => {
      const { getByText } = render(<Avatar initials="AB" color={color} />);
      expect(getByText('AB')).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

    sizes.forEach((size) => {
      const { getByText } = render(<Avatar initials="AB" size={size} />);
      expect(getByText('AB')).toBeTruthy();
    });
  });

  it('converts initials to uppercase', () => {
    const { getByText } = render(<Avatar initials="ab" />);
    expect(getByText('AB')).toBeTruthy();
  });

  it('limits initials to 2 characters', () => {
    const { getByText } = render(<Avatar initials="ABCD" />);
    expect(getByText('AB')).toBeTruthy();
  });
});
