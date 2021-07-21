import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TemplateLean, { TemplateProps } from './TemplateLean';

export default {
  title: 'Templates/TemplateLean',
  component: TemplateLean,
  description: 'A component to generate your portfolio with defined template',
  argTypes: {
  }
} as Meta;

const Template: Story<TemplateProps> = (agrs) => <TemplateLean {...agrs} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    personalInfo: {
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
    },
    educationInfo: {
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
    },
    workExperience: {
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
    },
    skillsAndTech: {
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
    },
    portfolio: {
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

    ]}
  }
}