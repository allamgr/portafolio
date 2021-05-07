import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PersonalInfo, PersonalInfoProps } from './PersonalInfo'

export default {
  title: 'PersonalInfo',
  component: PersonalInfo,
  description: 'A component to display your personal info',
  argTypes: {
  }
} as Meta;

const Template: Story<PersonalInfoProps> = (agrs) => <PersonalInfo {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Allam Galan Rosa',
  position: 'Full Stack Developer',
  brief: `Experienced Software Developer with more than 8 years involved in all phases of software development - from concept to delivery. `,
  email: 'agrtest',
  emailDomain: 'gmail.com',
  location: 'Dom. Rep.',
  phone: '859-555-5555',
  gender: 'Male',
  github: 'allamgr',
  linkedin: 'allamgr',
  twitter: 'allamgr',
}

export const Position = Template.bind({});
Position.args = {
  ...Default.args,
  position: {name: 'Fullstack Developer', at:'Tesla', atLink: 'https://tesla.com'},
}

export const MultiplePosition = Template.bind({});
MultiplePosition.args = {
  ...Default.args,
  position: [{name: 'Fullstack Developer', at:'Tesla', atLink: 'https://tesla.com', startDate: '2018'}, {name: 'Fullstack Developer', at:'Google', atLink: 'https://google.com', startDate: '2019'}],  
}