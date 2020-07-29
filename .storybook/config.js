import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from '../helpers/provider';
import theme from '../src/theme';

function loadStories() {
  require('../storybook/stories');
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
