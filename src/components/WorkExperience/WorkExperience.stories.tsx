import { Story, Meta } from '@storybook/react/types-6-0';
import { WorkExperience, WorkExperienceProps } from './WorkExperience'

export default {
  title: 'WorkExperience',
  component: WorkExperience,
  description: 'A component to display your work experience',
  argTypes: {
  }
} as Meta;

const Template: Story<WorkExperienceProps> = (agrs) => <WorkExperience {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      company: {
        name: "BairesDev",
        logoUrl: "https://media-exp1.licdn.com/dms/image/C4D0BAQHrJjN1hhMQLw/company-logo_100_100/0/1625087550333?e=1634774400&v=beta&t=VfpoD3sZYcakuQtP6reGzn1DGmwPBRwFBevVSkDt1No",
        location: "Santo Domingo",
        url: "https://www.bairesdev.com"
        
      },
      title: 'Software Engineer',
      startYear: 2013,
      startMonth: 1,
      current: true,
      description: `We are the fastest growing Technology Solutions company in Latin America. Our applicant pool is the largest in the industry: over 240.000 Software Engineers apply to work with us each year, and we hire only the Top 1% IT Talent, creating solid teams of 100% bilingual veteran developers.

We provide end to end delivery for companies of all sizes, from startups to some of the biggest companies in the world, including Google, Rolls-Royce, Pinterest, EY, SiriusXM, Motorola & Viacom, among others. The heart of our work is Software Outsourcing, Testing and Operational Support which we provide through a service of fully managed teams that integrate seamlessly into your projects.`
    },
    {
      company: {
        name: "Oriontek"
      },
      title: 'Senior Software Developer',
      startMonth: 3,
      endMonth: 12,
      startYear: 2010,
      endYear: 2012,
    }]
}
