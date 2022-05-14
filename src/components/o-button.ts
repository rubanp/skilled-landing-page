import {
  LitElement, html, css,
} from 'lit';
import {
  customElement, property,
} from 'lit/decorators.js';
import reset from './reset';

@customElement('o-button')
export default class OButton extends LitElement {
  @property() value: string = '';

  @property() type: 'one' | 'two' | 'three' = 'one';

  static styles = [
    reset, css`
    button {
      border-radius: 30px;
      color: #ffffff;
      padding: 1rem 2rem;
      outline: none;
      border: none;
      font: var(--body-m);
      transition: 0.5s;
      box-shadow: 0px 0px 30px -15px #000000;
    } 
    button:hover {
      box-shadow: none;
    }
    button:active {
      box-shadow: inset 0px 0px 40px -15px #000000;
      transition: none;
    }
    button[class="one"] {
      background: var(--bunting);
    }
    button[class="one"]:hover {
      background: var(--scampi);
    }
    button[class="two"] {
      background: var(--persian-rose-to-persimmon);
    }
    button[class="two"]:hover {
      background: var(--persimmon-to-carnation);
    }
    button[class="three"] {
      background: var(--dodger-blue-to-persian-rose);
    }
    button[class="three"]:hover {
      background: var(--persian-rose-to-scampi);
    }
    `,
  ];

  render() {
    return html`<button class=${this.type}>${this.value}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-button': OButton
  }
}
