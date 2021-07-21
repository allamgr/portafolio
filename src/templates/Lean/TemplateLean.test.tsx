import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TemplateLean from './TemplateLean';

describe('TemplateLean', () => {
  test('renders a default TemplateLean with PersonalInfo', async () => {
    render(<TemplateLean data={{}} />);

    expect(screen.getByText('Allam Galan Rosa')).toBeInTheDocument();

  })
});