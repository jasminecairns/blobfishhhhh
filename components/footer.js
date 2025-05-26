const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
footer {
    background-color: var(--main-dark-color);
    width: 100%;
    height: 20px;
    padding: 10px;
    text-align: center;
    color: #fff;
    border: var(--secondary-dark1-color);
    border-style: dashed;
}
  </style>
    <footer id="footer" style="display: flex; align-items: center; justify-content: center; background: #e9910d;background: linear-gradient(180deg,#e9910d 0%, #e9390d 100%);"> 
      <a href="https://github.com/jasminecairns/blobfishhhhh"><img src="/assets/emotes/github-mark.png" alt="Site updates via Github" height="30"></a>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
