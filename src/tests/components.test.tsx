import React from 'react';
import { render } from '@testing-library/react-native';
import AlertBanner from '../components/AlertBanner';

test('alert banner shows message', () => {
  const { getByText } = render(<AlertBanner visible message="hello" />);
  getByText('hello');
});
