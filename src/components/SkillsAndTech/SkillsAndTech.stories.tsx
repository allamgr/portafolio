import { Story, Meta } from '@storybook/react/types-6-0';
import { SkillsAndTech, SkillsAndTechProps } from './SkillsAndTech'

export default {
  title: 'SkillsAndTech',
  component: SkillsAndTech,
  description: 'A component to display your skills and knowed technologies',
  
} as Meta;

const Template: Story<SkillsAndTechProps> = (agrs) => <SkillsAndTech {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  technologies: [
    {
      name: 'C#',
      level: 'Advanced'
    },
    {
      name: 'Javascript',
      level: 'Advanced'
    },
    {
      name: 'CSS',
      level: 'Advanced'
    },
    {
      name: 'PHP',
      level: 'Advanced'
    },
    {
      name: 'React',
      level: 'Advanced'
    },
    {
      name: 'Node.js',
      level: 'Advanced'
    },
    {
      name: 'SQL',
      level: 'Intermediate'
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
