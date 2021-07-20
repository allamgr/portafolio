import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Portfolio, PortfolioProps } from './Porfolio'

export default {
  title: 'Portfolio',
  component: Portfolio,
  description: 'A component to display your skills and knowed technologies',
  
} as Meta;

const Template: Story<PortfolioProps> = (agrs) => <Portfolio {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  projects: [
    {
      name: 'MappRisk',
      desc: `Create a web client and API using .net core and react to search for companies and people background in risky databases online, to see if they are blacklisted or have a negative score to do investment.

Deploy the application on Azure`,
      stack: ['react', 'redux', 'sass', 'azure'],
      startYear: 2019,
      endYear: 2020
    },
    {
      name: 'Babeque App',
      desc: `Create a web client using react so that registry users and parents can authenticate and check the grades of the school's students, receive and send internal messages. Integrate the frontend with a rest api. The application had an administration module for privileged users.

Deploy the application on Azure.`,
      stack: ['react', 'redux', 'azure', 'material-ui', 'helmet'],
      startYear: 2018,
    },
    {
      name: 'SGV',
      desc: `Leader of a team of 6 developers, divided into 3 applications (api, mobile and web). Meetings with the client to define user stories and new requirements, responsible for analyzing user stories and defining the tasks that must be performed to meet the requirement. The team is divided into 2 mobile programmers, 2 frontend programmers and 2 backend programmers including myself.

Create and implement the new functionalities in the rest api. Implement the design in the web client and integrate it with the backend. Do code reviews of the merge requests.`,
      stack: ['scrum', 'angular:4', 'typescript', 'sass', 'c#', 'ASP.Net MVC', 'Web Api 2', 'SQL Server', 'EntityFramework', 'xUnit', 'firebase', 'postman', 'SSIS'],
      startYear: 2018,
      endYear: 2019
    },
    {
      name: 'SolucionB',
      desc: `Responsible for creating a web application in Vue and create the api. Layout the design from an .ai file. Implement the functionalities and integrate the application with an api rest. Create unit tests for important scenarios.`,
      stack: ['vue', 'vuex', 'sass', 'laravel', 'vuetify', 'mocha'],
      startYear: 2017,
      endYear: 'present'
    },

  ]
}
