import { html } from 'lit';

import '../components/o-counter';

import CounterDocumentation from './counter.docs.mdx';

export default {
  title: 'Elements/Counter',
  component: 'OCounter',
  parameters: {
    docs: {
      page: CounterDocumentation,
    },
  },
};

const Template = ({
  caption, value, unit, size,
}) => html`<o-counter caption="${caption}" value="${value}" unit="${unit}" class="${size}"></o-counter>`;

export const Large = Template.bind({});
Large.args = {
  caption: 'Course hours',
  value: 1451,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  caption: 'Members',
  value: 25,
  unit: 'k',
  size: 'small',
};
