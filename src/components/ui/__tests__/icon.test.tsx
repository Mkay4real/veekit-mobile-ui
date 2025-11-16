import React from 'react';
import { render } from '@testing-library/react-native';
import { Icon } from '../icon';

describe('Icon', () => {
  it('renders SVG icon', () => {
    const component = render(
      <Icon iconType="svg" icon="search" color="#000" size={24} />
    );
    expect(component).toBeTruthy();
  });

  it('renders IonIcons icon', () => {
    const component = render(
      <Icon iconType="IonIcons" icon="airplane" color="#000" size={24} />
    );
    expect(component).toBeTruthy();
  });

  it('renders FontAwesome icon', () => {
    const component = render(
      <Icon iconType="FontAwesome" icon="airplane" color="#000" size={24} />
    );
    expect(component).toBeTruthy();
  });

  it('renders with custom size', () => {
    const component = render(
      <Icon iconType="svg" icon="search" color="#000" size={48} />
    );
    expect(component).toBeTruthy();
  });

  it('renders with custom color', () => {
    const component = render(
      <Icon iconType="svg" icon="search" color="#FF0000" size={24} />
    );
    expect(component).toBeTruthy();
  });
});
