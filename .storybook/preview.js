import '../src/styles/main.css';
import '../src/styles/reset.css';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    default: 'dark-grey',
    values: [
      {
        name: 'plain-white',
        value: '#ffffff',
      },
      {
        name: 'plain-black',
        value: '#000000',
      },
      {
        name: 'light-grey',
        value: "#cccccc"
      },
      {
        name: 'dark-grey',
        value: "#696969"
      }
    ],
    grid: {
      cellSize: 10,
      opacity: 0.5,
      cellAmount: 10,
      offsetX: 16,
      offsetY: 16,
    }
  },
}
