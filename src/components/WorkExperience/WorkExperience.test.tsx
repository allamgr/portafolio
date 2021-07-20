import { render, fireEvent, screen } from '@testing-library/react';
import { WorkExperience } from './WorkExperience';

describe('WorkExperience', () => {
  test('renders a default Work Experience with company name and title', async () => {
    render(<WorkExperience data={[{company: {name: "UNIBE"}, title: "Jr. Developer", startYear: 2013, startMonth: 1}] }/>);
    expect(screen.getByText('Jr. Developer')).toBeInTheDocument();
  })
});