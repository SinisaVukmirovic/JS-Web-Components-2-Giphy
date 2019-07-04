
import { url } from './services.js';

// First, we must create a class that contains the behaviour of the web component that we are going to build.

class CardComponent extends HTMLElement {
    constructor (){
        super();

        // After adding this in our index.html file we can use DOM methods to clone the above template and attach it to our Shadow DOM.
        
        const shadow = this.attachShadow({mode: 'open'});
       
        // Clone the template so that it can be attched to the shadowroot   
        const template = document.getElementById('card-view');
        const templateInstance = template.content.cloneNode(true);
        shadow.appendChild(templateInstance);
    
    }

    async connectedCallback() {
        this.gifObj = await this.fetchFromGiphy();
        this.render(this, this.gifObj);
    }

    // function to inject the values inside the Shadow DOM’s elements.
    render(shadowElem, data) {
        const shadowRoot = shadowElem.shadowRoot;
        shadowRoot.getElementById('card-title').innerHTML = data.name;
        shadowRoot.getElementById('gif-view').src = data.url;
    }

    async fetchFromGiphy() {
        const res = await fetch(url);
        const json = await res.json();
        const gifUrl = json['data']['0'].images['fixed_height'].url;
        const gifName = json['data']['0'].title;
        
        const gifObject = {
            name: gifName,
            url: gifUrl
        }

        return gifObject;
    }
}


customElements.define(`card-component`, CardComponent);

