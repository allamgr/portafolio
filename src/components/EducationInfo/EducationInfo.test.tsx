import { render, fireEvent, screen } from '@testing-library/react';
import { EducationInfo } from './EducationInfo';

describe('EducationInfo', () => {
  test('renders a default Education Info with school name', async () => {
    render(<EducationInfo data={[{school: {name: "UNIBE"}, degree: "Doctor", startYear: 2013}] }/>);
    expect(screen.getByText('UNIBE')).toBeInTheDocument();
  })
});