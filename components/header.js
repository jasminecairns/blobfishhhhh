const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<style>    
  .header {
    width: 1200px;
    background-color: var(--secondary-dark2-color);
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
    <marquee behavior="scroll" direction="left" scrollamount="6" height="30px">
      <img src="/assets/buttons/computer.gif" alt="button that says best viewed on a computer"> <img src="/assets/buttons/construction.gif" alt="button that says always under construction. has looping construction stripes"> <img src="/assets/buttons/vsc.gif" alt="button that says built with VSC ❤️"></img> <img src="/assets/buttons/neocities.gif" alt="button that says hosted on neocities"> <img src="/assets/buttons/freencool.gif" alt="button that says free n' cool. has a few smiley faces"> <img src="/assets/buttons/void.gif" alt="button that says powered by the void"> <img src="/assets/buttons/mspaint.gif" alt="button that says ms paint 4ever!"> <img src="/assets/buttons/owntwopaws.jpg" alt="button that says made with my own 2 paws">
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