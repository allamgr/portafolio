import { render, fireEvent, screen } from '@testing-library/react';
import { WorkExperience } from './WorkExperience';

describe('WorkExperience', () => {
  test('renders a default Work Experience with company name', async () => {
    render(<WorkExperience data={[{company: {name: "UNIBE"}, title: "Doctor", startYear: 2013}] }/>);
    expect(screen.getByText('UNIBE')).toBeInTheDocument();
  })
});