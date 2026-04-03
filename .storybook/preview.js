import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Gatsby Setup
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// Override the window.___navigate method Gatsby defines
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
  options: {
    panelPosition: 'right',
  },
};
