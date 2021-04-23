import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PersonalInfo } from './PersonalInfo';

describe('PersonalInfo', () => {
  test('renders a default Personal Info with name', async () => {
    render(<PersonalInfo name="Allam Galan Rosa" />);

    expect(screen.getByText('Allam Galan Rosa')).toBeInTheDocument();

  })
});