import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';


import App from './App';
import './index.css';


const ELEMENT_ID = 'test-react-app';

if (import.meta.env.DEV) {
   import('umich-theme/main.css');
   import('umich-theme/clay.css');
}


// Development mode - render directly to #root
if (import.meta.env.DEV) {
   const rootElement = document.getElementById('root');
   if (rootElement) {
       createRoot(rootElement).render(
           <StrictMode>
               <App />
           </StrictMode>
       );
   }
}
// Production mode - use as Web Component for Liferay
else {
   class WebComponent extends HTMLElement {
       root?: Root;


       connectedCallback() {
           this.root = createRoot(this);


           this.root.render(
               <StrictMode>
                   <App />
               </StrictMode>
           );
       }


       disconnectedCallback() {
           if (this.root) {
               this.root.unmount();
               delete this.root;
           }
       }
   }


   if (!customElements.get(ELEMENT_ID)) {
       customElements.define(ELEMENT_ID, WebComponent);
   }
}
