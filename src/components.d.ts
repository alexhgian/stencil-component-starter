/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { AgSearch as AgSearch } from './components/ag-serch/ag-search';

interface HTMLAgSearchElement extends AgSearch, HTMLElement {
}
declare var HTMLAgSearchElement: {
  prototype: HTMLAgSearchElement;
  new (): HTMLAgSearchElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ag-search": HTMLAgSearchElement;
  }
  interface ElementTagNameMap {
      "ag-search": HTMLAgSearchElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ag-search": JSXElements.AgSearchAttributes;
      }
  }
  namespace JSXElements {
      export interface AgSearchAttributes extends HTMLAttributes {
        
          first?: string,
          last?: string
      }
  }
}

