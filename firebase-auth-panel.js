// @ts-check


const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
            width: 400px;
            height: 500px;
            background: white;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            border-radius: 5px;
            left: 50%;
            margin-left: -200px;
            top: 50%;
            margin-top: -250px;
            padding: 10px;
            position: absolute;
            text-align: center;
            font-size: 1.2em;
        }

        input, button {
            outline: none;
        }

        input {
            align-items: center;
            border: 1px solid transparent;
            border-radius: 3px;
            box-shadow: none;
            display: inline-flex;
            font-size: 1rem;
            height: 2.25em;
            justify-content: flex-start;
            line-height: 1.5;
            padding-bottom: calc(0.375em - 1px);
            padding-left: calc(0.625em - 1px);
            padding-right: calc(0.625em - 1px);
            padding-top: calc(0.375em - 1px);
            position: relative;
            vertical-align: top;
            background-color: white;
            border-color: #dbdbdb;
            color: #363636;
            box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
            max-width: 100%;
            width: 100%;
            box-sizing: border-box;
            margin: 5px 0px;
        }

        .is_success {
            border-color: #23d160;
        }

        .is_danger {
            border-color: #ff3860;
        }

        input:focus {
            border-color: #3273dc;
            box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
        }

        img {
            max-width: 80%;
        }

        div {
            margin: 10px;
        }

        .control svg {
            position: absolute;
            height: 25px;
            width: 25px;
            z-index: 100;
            margin-top: 11px;
            fill: #dbdbdb;
        }


        .control input {
            padding-left: 35px;
        }

        svg {
            height: 45px;
            width: 45px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
    <img src="" />
    <div class="control">
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <input class="email" type="text" placeholder="Email..." />
    </div>
    <div class="control">
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
        <input class="password" type="password" placeholder="Password..."/>
    </div>
    <br/>
    <button class="clear">Clear</button>
    <button class="login">Login</button>

    <div> Or Login With Social Media </div>

    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"/>
        <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"/>
        <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 0 0 0 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"/>
        <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"/>
    </svg>

    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.007 19c.55 0 .993-.444.993-.993V1.993c0-.55-.444-.993-.993-.993H1.993C1.443 1 1 1.444 1 1.993v16.014c0 .55.444.993.993.993h16.014zm-4.587 0v-6.97h2.34l.35-2.717h-2.69V7.578c0-.786.218-1.322 1.346-1.322h1.438v-2.43c-.25-.034-1.102-.108-2.096-.108-2.073 0-3.494 1.267-3.494 3.59v2.005H8.268v2.717h2.346V19h2.806z" fill="#3B5998" fill-rule="evenodd"/>
    </svg>
    
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3.924c-.736.326-1.527.547-2.357.646.848-.508 1.498-1.312 1.804-2.27-.792.47-1.67.812-2.605.996C16.092 2.498 15.027 2 13.847 2 11.58 2 9.743 3.837 9.743 6.103c0 .322.037.635.107.935-3.41-.17-6.434-1.804-8.458-4.287-.352.61-.555 1.314-.555 2.066 0 1.423.724 2.68 1.825 3.415-.672-.02-1.305-.206-1.858-.513v.052c0 1.987 1.414 3.645 3.29 4.022-.344.096-.706.146-1.08.146-.265 0-.522-.026-.772-.074.522 1.63 2.037 2.818 3.833 2.85C4.67 15.81 2.9 16.468.98 16.468c-.332 0-.66-.02-.98-.057 1.816 1.166 3.973 1.846 6.29 1.846 7.547 0 11.674-6.253 11.674-11.675 0-.18-.004-.355-.01-.53.8-.58 1.496-1.3 2.046-2.125" fill="#55ACEE" fill-rule="evenodd"/>
    </svg>

`;

/**
 * This is the class that controls each instance of your custom element.
 */
class FirebaseLogin extends HTMLElement {

    constructor() {
        super();

        // create shadow root for any children context
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        if(this.shadowRoot) {
            const logo = this.shadowRoot.querySelector('img');
            if(logo) {
                logo.src = this.getAttribute('logo') || '';
            }

            this.loginButton = this.shadowRoot.querySelector('.login');
            this.emailInput = this.shadowRoot.querySelector('input.email');
            this.passwordInput = this.shadowRoot.querySelector('.password');

        }

        const config = {
            apiKey: this.getAttribute('api-key'),
            authDomain: this.getAttribute('auth-domain'),
          };
        
        this.firebase = firebase.initializeApp(config);
        this.auth = this.firebase.auth();

        this.loginButton.addEventListener('click', () => {
            this.loginUser(this.emailInput.value, this.passwordInput.value);
        });

        this.listenForUser();
    }

    /**
     * Part of the custom element spec. Called after your element is remove from
     * the DOM. Disconnect any listeners or anything else here.
     */
    disconnectedCallback() {

    }

    /**
     * Part of the custom element spec. Called when one of the observed
     * attributes changes, either via setAttribute() or with the attribute being
     * manually set in the HTML.
     * 
     * @param {String} name the name of the attribute that changed
     * @param {string | number} oldValue the previous value of the attribute
     * @param {string | number} newValue the new value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // respond to a changed attribute here
    }

    createUser(email, password) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .catch( (error) => {
                if(error) {
                    console.log(error.message);
                }else {
                    console.log('user created');
                }
          });
    }

    loginUser(email , password){
        console.log(email);
        console.log(password);
        this.auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
    
                if (error) {
                    console.log(error.message);
                }else {
                    console.log('User logged in!');
                }
          });
    }

    listenForUser() {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in.
              console.log(user);
              // ...
            } else {
              // User is signed out.
              // ...
            }
          });
    }
}

customElements.define("firebase-auth-panel", FirebaseLogin);