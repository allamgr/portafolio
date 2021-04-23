import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PersonalInfo, PersonalInfoProps } from './PersonalInfo'

export default {
  title: 'PersonalInfo',
  component: PersonalInfo,
  description: 'A component to display your personal info',
  argTypes: {
    name: { control: 'string' },
    position: {control: 'string' },
    brief: {control: 'string' },
    email: {control: 'string' },
    emailDomain: {control: 'string' },
    location: {control: 'string' },
    phone: {control: 'string' },
    gender: {control: 'string' },
    github: {control: 'string' },
  }
} as Meta;

const Template: Story<PersonalInfoProps> = (agrs) => <PersonalInfo {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Allam Galan Rosa',
  position: 'Full Stack Developer',
  brief: 'I like to build custom software',
  email: 'agrtest',
  emailDomain: 'gmail.com',
  location: 'DR',
  phone: '859-555-5555',
  gender: 'M',
  github: 'allamgr'
}