import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EducationInfo, EducationInfoProps } from './EducationInfo'

export default {
  title: 'Components/EducationInfo',
  component: EducationInfo,
  description: 'A component to display your education info',
  argTypes: {
  }
} as Meta;

const Template: Story<EducationInfoProps> = (agrs) => <EducationInfo {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      school: {
        name: "Universidad Iberoamericana",
        logoUrl: "https://cdn5.dominicanasolidaria.org/wp-content/uploads/2019/03/logo-unibe.jpg",
        acronym: "UNIBE",
        location: "Santo Domingo",
        url: "https://unibe.edu.do"
        
      },
      degree: 'Information Technology Engineer',
      startYear: 2013
    },
    {
      school: {
        name: "Instituto Tecnológico de las Américas"
      },
      degree: 'Software Developer Technologist',
      startYear: 2010,
      endYear: 2012
    }]
}
