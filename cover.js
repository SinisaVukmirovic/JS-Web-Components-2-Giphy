class CoverComponent extends HTMLElement {
    constructor (){
        super();

        // After adding this in our index.html file we can use DOM methods to clone the above template and attach it to our Shadow DOM.
        
        const shadow = this.attachShadow({mode: 'open'});
       
        // Clone the template so that it can be attched to the shadowroot   
        const template = document.getElementById('cover');
        const templateInstance = template.content.cloneNode(true);
        shadow.appendChild(templateInstance);
    }

    // function to inject the values inside the Shadow DOM’s elements.
    render(shadowElem) {
        const shadowRoot = shadowElem.shadowRoot;
        shadowRoot.getElementById('cover').innerHTML = `<h1>sddff</h1>`;
    }
}


customElements.define(`cover-component`, CoverComponent);
