const layoutCss = `
  :host {
    display: grid;
    grid-template-areas:
    "head head head"
    "navB main side"
    ".... main side"
    "foot foot foot";
    grid-template-columns: auto 1fr auto;
  }

  header {
    grid-area: head;
  }

  nav {
    grid-area: navB;
  }

  main {
    grid-area: main;
  }

  aside {
    grid-area: side;
  }

  footer {
    grid-area: foot;
  }
`;

class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        ${layoutCss}
      </style>
      <header>
        <slot name="in-header"></slot>
      </header>
      <nav>
        <slot name="in-nav"></slot>
      </nav>
      <main>
        <slot name="in-main"></slot>
      </main>
      <aside>
        <slot name="in-aside"></slot>
      </aside>
      <footer>
        <slot name="in-footer"></slot>
      </footer>
    `;
  }
}

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        [slot="in-nav"],
        [slot="in-aside"] {
          writing-mode: vertical-lr;
        }

      </style>
      <sff-layout>
        <div slot="in-header"><h1>TODO: header</h1></div>
        <div slot="in-nav"><h2>TODO: nav bar</h2></div>
        <div slot="in-main"><h2>TODO: main</h2></div>
        <div slot="in-aside"><h2>TODO: aside</h2></div>
        <div slot="in-footer"><h2>TODO: footer</h2></div>
      </sff-layout>
    `;
  }
}

customElements.define("sff-layout", Layout);
customElements.define("sff-home", Home);
document.body.innerHTML = `<sff-home></sff-home>`;
