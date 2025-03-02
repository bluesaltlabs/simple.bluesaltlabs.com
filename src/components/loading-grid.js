import { LitElement, html, css } from 'lit-element';

// todo: update this so it's not a LitElement
class LoadingGrid extends LitElement {
  static styles = css`
    /* todo: update this so I don't have to explicitly define all these divs. use ::after */
    :host,
    .lds-grid,
    .lds-grid div {
      box-sizing: border-box;
      color: var(--color-blue-alt); /* todo: allow overriding this? */
    }
    :host,
    .lds-grid {
      /*display: inline-block;*/
      display: block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-grid div {
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 25%;
      background: currentColor;
      animation: lds-grid 1.2s linear infinite;
    }
    .lds-grid div:nth-child(1) {
      top: 8px;
      left: 8px;
      animation-delay: 0s;
    }
    .lds-grid div:nth-child(2) {
      top: 8px;
      left: 32px;
      animation-delay: -0.4s;
    }
    .lds-grid div:nth-child(3) {
      top: 8px;
      left: 56px;
      animation-delay: -0.8s;
    }
    .lds-grid div:nth-child(4) {
      top: 32px;
      left: 8px;
      animation-delay: -0.4s;
    }
    .lds-grid div:nth-child(5) {
      top: 32px;
      left: 32px;
      animation-delay: -0.8s;
    }
    .lds-grid div:nth-child(6) {
      top: 32px;
      left: 56px;
      animation-delay: -1.2s;
    }
    .lds-grid div:nth-child(7) {
      top: 56px;
      left: 8px;
      animation-delay: -0.8s;
    }
    .lds-grid div:nth-child(8) {
      top: 56px;
      left: 32px;
      animation-delay: -1.2s;
    }
    .lds-grid div:nth-child(9) {
      top: 56px;
      left: 56px;
      animation-delay: -1.6s;
    }
    @keyframes lds-grid {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `
  static properties = {
    loading: { type: Boolean },
  }

  constructor() {
    super();
    //
  }

  render() {
    return html`
      <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    `;
  }
}

customElements.define('loading-grid', LoadingGrid);
