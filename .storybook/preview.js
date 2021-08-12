import React from 'react';
import { GlobalStyle } from '../src/shared/global';

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <React.Fragment>
      <GlobalStyle />
      <Story />
    </React.Fragment>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Get Started', ['Introduction', 'Install', 'Templates', 'Components Based', 'Conclusion', 'Examples'], 'Components', 'Templates', ['Default Templates', '*'], '*', 'Help'],
    }
  },
}