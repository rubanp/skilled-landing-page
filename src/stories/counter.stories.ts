import { html } from 'lit';

import '../components/o-counter';

export default {
  title: 'Button',
};

export const Small = () => html`<o-counter caption="Members" value="25" unit="k" class="small"></o-counter>`;
