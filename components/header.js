const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <style>    
        .header {
        width: 100%;
        background-color: var(--secondary-dark2-color);
        /* header color here! */
        height: 150px;
        background-image: var(--header-image);
        background-size: 100%;
        background-position: center;
        margin-bottom: 0.5em;
        border:var(--secondary-color);
        border-style: dashed;
    }
    </style>
        <div class="row">
          <div class="header"></div>
        </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header)