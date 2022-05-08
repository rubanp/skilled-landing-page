import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import reset from './reset';

export default class OCounter extends LitElement {
  @property() caption: string = '';

  @property({ type: Number }) value: number = 0;

  @property() unit: string = '';

  static styles = [
    reset, css`
      :host {
        padding: 1.25rem 1.5rem;
        box-shadow: 0px 34px 54px 0px rgba(6, 22, 141, 0.16);
        border-radius: 15px;
        margin: 2em;
      }
      p {
        font: var(--body-m);
        color: var(--waterloo);
      }
      h2 {
        font: var(--heading-l);
      }
    `,
  ];

  render() {
    return html`
      <p>${this.caption}</p>
      <h2>${this.value} ${this.unit}</h2>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-counter': OCounter;
  }
}
