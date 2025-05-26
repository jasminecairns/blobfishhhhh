const navbarTemplate = document.createElement('template');

navbarTemplate.innerHTML = `
    <style>    
          .navbar {
            list-style:none;
            list-style-type: none;
            background-color: var(--main-color);
            background-image: var(--main-bg-image);
            border:var(--secondary-color);
            border-style: dashed;
            /* navbar color */
            padding: 1em;
            width: fit-content;
        }
        
        .navbar ul {

            padding: 0;
            margin: 0;
            list-style:none;
            list-style-type: none;
            justify-content: space-evenly;
        }
        
        /* navigation links*/
        .navbar li a {
            /* navbar text color */
            font-weight: 800;
            text-decoration: none;
            color: var(--secondary-dark2-color);
            transition: text-shadow 0.5s;
            /* this removes the underline */
        }

        .navbar li a:hover {
          text-shadow: 2px 2px 5px var(--secondary-color);
        }

        .tooltip {
            position: relative;
            display: inline-block;
        }
        .tooltip .tooltiptext {
            visibility: hidden;
            background-color: var(--secondary-dark3-color);
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 5px 5px 5px;
            position: absolute;
            z-index: 1;
            position: absolute;
            z-index: 1;
            top: -5px;
            left: 105%;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .tooltip .tooltiptext::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: 100%; /* To the left of the tooltip */
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent var(--secondary-dark3-color) transparent transparent;
        }
        
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
    
    </style>
    <div style="display: flex;">
    <img src="assets/dividers/blue-divider-short.gif" alt="blue flames" style="margin-bottom: 15px; margin-left: 50px; margin-top: 5px;">
        <ul class="navbar">
            <li>
              <div class="tooltip"><a href="/index.html"><span style='font-size:3em;'>⌂</span></a>
              <span class="tooltiptext">home</span>
              </div>
            </li>
            <li>
              <div class="tooltip"><a href="/projects.html"><span style='font-size:3em;'>✎</span></a>
              <span class="tooltiptext">projects</span>
              </div>
            </li>
            <li>
              <div class="tooltip"><a href="/blog.html"><span style='font-size:3em;'>✍︎</span></a>
              <span class="tooltiptext">blog</span>
              </div>
            </li>
            <li>
              <div class="tooltip"><a href="/now.html"><span style='font-size:3em;'>‼</span></a>
              <span class="tooltiptext">now</span>
              </div>
            </li>
          </ul>
          <img src="assets/dividers/blue-divider-short-flipped.gif" alt="blue fames" style="margin-bottom: 15px; margin-top: 5px;">
          </div>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(navbarTemplate.content);
  }
}

customElements.define('navbar-component', Navbar)