import { LitElement, css, html } from 'lit';
import '@vaadin/list-box';
import '@vaadin/item';

import litLogo from './assets/lit.svg';

const globalCause = {
  _id: '5e0529bb-be5e-4f57-b1a5-3190fca9a3b1',
  _updatedDate: 'Tue Sep 06 2022 15:49:05 GMT-0500 (Eastern Standard Time)',
  createdDate: 'Tue Sep 06 2022 15:47:00 GMT-0500 (Eastern Standard Time)',
  name: 'San Thome Plus  6 x 24/15 x 60 (A)- 17pcs/bx',
  description:
    'The San Thome Plus  6 x 24/15 x 60 (A)- 17pcs/bx is provided by our partners  at Angel Gres. <br>This selection is a part of our Tiles collection.',
  mainMedia:
    'wix:image://v1/0fd2b1_e09856c1b129401ba44a8c5a97c64ffc~mv2.jpg/file.jpg#originWidth=209&originHeight=200',
  mediaItems: [
    {
      id: '0fd2b1_e09856c1b129401ba44a8c5a97c64ffc~mv2.jpg',
      src: 'wix:image://v1/0fd2b1_e09856c1b129401ba44a8c5a97c64ffc~mv2.jpg/file.jpg#originWidth=209&originHeight=200',
      description: '',
      title: '',
      link: 'undefined',
      type: 'Image',
    },
  ],
  sku: 'ANGR356',
  ribbons: [],
  currency: 'JMD',
  price: 149.99,
  discountedPrice: 149.99,
  formattedPrice: 'J$149.99',
  formattedDiscountedPrice: 'J$149.99',
  pricePerUnit: 'undefined',
  formattedPricePerUnit: 'undefined',
  pricePerUnitData: 'undefined',
  inventoryItemId: 'a1fad644-41a1-b0a8-4e5a-ce6f03565c4e',
  discount: {
    type: 'NONE',
    value: 0,
  },
  trackInventory: false,
  inStock: true,
  quantityInStock: 'undefined',
  additionalInfoSections: [
    {
      title: 'Sub Category',
      description: 'ANGEL GRES 15 x 60',
    },
  ],
  productOptions: {
    Brand: {
      optionType: 'drop_down',
      name: 'Brand',
      choices: [
        {
          value: 'Angel Gres',
          description: 'Angel Gres',
          inStock: true,
          visible: true,
          mainMedia: 'null',
          mediaItems: [],
        },
      ],
    },
    Room: {
      optionType: 'drop_down',
      name: 'Room',
      choices: [
        {
          value: 'Indoor',
          description: 'Indoor',
          inStock: true,
          visible: true,
          mainMedia: 'null',
          mediaItems: [],
        },
      ],
    },
    Size: {
      optionType: 'drop_down',
      name: 'Size',
      choices: [
        {
          value: '15x60',
          description: '15x60',
          inStock: true,
          visible: true,
          mainMedia: 'null',
          mediaItems: [],
        },
      ],
    },
    Use: {
      optionType: 'drop_down',
      name: 'Use',
      choices: [
        {
          value: 'Floor',
          description: 'Floor',
          inStock: true,
          visible: true,
          mainMedia: 'null',
          mediaItems: [],
        },
        {
          value: 'Wall',
          description: 'Wall',
          inStock: true,
          visible: true,
          mainMedia: 'null',
          mediaItems: [],
        },
      ],
    },
    Category: {
      optionType: 'drop_down',
      name: 'Category',
      choices: [
        {
          value: 'Tiles',
          description: 'Tiles',
          inStock: true,
          visible: true,
          mainMedia: 'null',
          mediaItems: [],
        },
      ],
    },
    Material: {
      optionType: 'drop_down',
      name: 'Material',
      choices: [
        {
          value: 'Ceramic',
          description: 'Ceramic',
          inStock: true,
          visible: true,
          mainMedia: 'null',
          mediaItems: [],
        },
      ],
    },
  },
  productPageUrl: '/product/san-thome-plus-6-x-24-15-x-60-a-17pcs-bx',
  customTextFields: [],
  manageVariants: false,
  productType: 'physical',
  slug: 'san-thome-plus-6-x-24-15-x-60-a-17pcs-bx',
  weight: 0,
  collections: 'undefined',
  seoData: 'undefined',
  ribbon: '',
  brand: 'Angel Gres',
  variants: [
    {
      _id: '00000000-0000-0000-0000-000000000000',
      choices: {},
      variant: {
        currency: 'JMD',
        price: 149.99,
        discountedPrice: 149.99,
        pricePerUnit: 'undefined',
        formattedPrice: 'J$149.99',
        formattedDiscountedPrice: 'J$149.99',
        formattedPricePerUnit: 'undefined',
        weight: 0,
        sku: 'ANGR356',
        visible: true,
      },
    },
  ],
};

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.docsHint = 'Click on the Vite and Lit logos to learn more';
    this.count = 0;
    this.listBox = document.createElement('vaadin-list-box');
  }

  render() {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      ${this.listBox}
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `;
  }

  firstUpdated() {
    const optionsList = Object.values(globalCause.productOptions).filter(
      (option) => option.choices.length > 1
    );
    // const optionsList = Object.values(globalCause.productOptions).filter(option=>option.choices>1);
    const opBool = Object.values(globalCause.productOptions).map(
      (o) => o.choices.length > 1
    );

    console.log(optionsList);
    console.log(optionsBoolean);
    // this.listBox.setItems(["New","Old"]);
  }
  _onClick() {
    this.count++;
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `;
  }
}

window.customElements.define('my-element', MyElement);
