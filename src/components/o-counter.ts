import {
  LitElement, html, css,
} from 'lit';
import {
  property, state, query, customElement,
} from 'lit/decorators.js';
import { CountUp } from 'countup.js';
import reset from './reset';

@customElement('o-counter')
export default class OCounter extends LitElement {
  @property() caption: string = '';

  @property({ type: Number }) value: number = 0;

  @property() unit: string = '';

  @state() counterDelay: number = 100;

  @query('#value') valueElem!: HTMLSpanElement;

  static styles = [
    reset, css`
      :host {
        background-color: var(--white);
        height: 120px;
        padding: 1.00em 1.25em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        box-shadow: 0px 34px 54px 0px rgba(6, 22, 141, 0.16);
        border-radius: 15px;
        animation: fadeInRight 1s ease-out forwards;
      }
      :host(.large) {
        width: 200px;
      }
      :host(.small) {
        width: 155px;
      }
      p {
        font: var(--body-m);
        color: var(--waterloo);
      }
      h2 {
        font: var(--heading-l);
        color: black;
      }
      @media only screen and (max-width: 770px) {
        :host {
          height: 100px
        }
        :host(.large) {
          width: 155px;
        }
        :host(.small) {
          width: 105px;
        }
        h2 {
          font: var(--heading-m);
        }
        p {
          font-size: 14px;
        }
      }
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translate3d(50%, 0, 0);
        }

        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    `,
  ];

  render() {
    return html`
      <p>${this.caption}</p>
      <h2><span id="value">0</span>${this.unit}</h2>
    `;
  }

  firstUpdated() {
    setTimeout(() => {
      const countup = new CountUp(this.valueElem, this.value, {
        startVal: this.value > 1000 ? 1000 : 10,
        duration: this.value > 1000 ? 3 : 4.5,
      });
      if (!countup.error) {
        countup.start();
      } else {
        console.error(countup.error);
      }
    }, this.counterDelay);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'o-counter': OCounter;
  }
}
