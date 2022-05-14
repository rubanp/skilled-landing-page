import { html } from 'lit';

import '../components/o-button';

export default {
  title: 'Elements/Button',
  component: 'OCounter',
};

const Template = ({
  value, type,
}) => html`<o-button value="${value}" type="${type}"><o-button>`;

export const One = Template.bind({});
One.args = {
  value: 'Get Started',
  type: 'one',
};

export const Two = Template.bind({});
Two.args = {
  value: 'Get Started',
  type: 'two',
};

export const Three = Template.bind({});
Three.args = {
  value: 'Get Started',
  type: 'three',
};
