import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '../text';

describe('Text', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText('Hello World')).toBeTruthy();
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
      const { getByText } = render(<Text color={color}>{color} text</Text>);
      expect(getByText(`${color} text`)).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

    sizes.forEach((size) => {
      const { getByText } = render(<Text size={size}>Size {size}</Text>);
      expect(getByText(`Size ${size}`)).toBeTruthy();
    });
  });

  it('renders with different weights', () => {
    const weights = ['light', 'regular', 'medium', 'bold'] as const;

    weights.forEach((weight) => {
      const { getByText } = render(<Text weight={weight}>{weight}</Text>);
      expect(getByText(weight)).toBeTruthy();
    });
  });

  it('renders with high contrast', () => {
    const { getByText } = render(<Text highContrast>High Contrast</Text>);
    expect(getByText('High Contrast')).toBeTruthy();
  });

  it('accepts custom className', () => {
    const { getByText } = render(<Text className="custom-class">Custom</Text>);
    expect(getByText('Custom')).toBeTruthy();
  });
});
