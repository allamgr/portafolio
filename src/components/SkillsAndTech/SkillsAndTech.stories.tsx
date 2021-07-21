import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SkillsAndTech, SkillsAndTechProps } from './SkillsAndTech'

export default {
  title: 'Components/SkillsAndTech',
  component: SkillsAndTech,
  description: 'A component to display your skills and knowed technologies',
  
} as Meta;

const Template: Story<SkillsAndTechProps> = (agrs) => <SkillsAndTech {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  technologies: [
    {
      name: 'C#',
      level: 'advanced'
    },
    {
      name: 'Javascript',
      level: 'advanced'
    },
    {
      name: 'CSS',
      level: 'advanced'
    },
    {
      name: 'PHP',
      level: 'advanced'
    },
    {
      name: 'React',
      level: 'advanced'
    },
    {
      name: 'Node.js',
      level: 'advanced'
    },
    {
      name: 'SQL',
      level: 'intermediate'
    },
    {
      name: 'MySQL',
      level: 'I'
    },
    {
      name: 'Laravel',
      level: 'I'
    },
    {
      name: 'Typescript',
      level: 'I'
    }
  ]
}
