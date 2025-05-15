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
        border:var(--secondary-color);
        border-style: dashed;
    }
    </style>
    <div>
        <div class="row">
          <div class="header"></div>
        </div>
          <div style="background: #e9910d;background: linear-gradient(180deg,#e9910d 0%, #e9390d 100%); border: var(--secondary-dark1-color); border-style: dashed;">
          <marquee behavior="scroll" direction="left" scrollamount="6" direction="left" height="20px">
            <strong style="color: #000000">˚　　　　✦　　　.　　. 　 ˚　.　　　　　 . ✦　　　 　˚　　　　 . ★⋆.✭　 　　*　　 　　✦　　　.　　.　　　✦　˚ 　　　　 ˚　.</strong>
            </marquee>
        </div>
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