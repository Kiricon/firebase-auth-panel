// @ts-check
const firebase = require('firebase');

const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            background: white;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            border-radius: 5px;
            text-align: center;
            font-size: 1.2em;
            display: table;
            position: relative;
            overflow: hidden;
        }

        .hide {
            display:none;
        }

        .content {
            padding: 10px;
            margin: 30px 0px 10px 0px;
        }

          @keyframes spinAround {
            from {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(359deg);
                      transform: rotate(359deg);
            }
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
            fill: #dbdbdb;
            margin:  11px 5px 5px 5px;
        }


        .control input {
            padding-left: 35px;
        }

        #alternateLogins svg {
            height: 30px;
            width: 30px;
            margin: 5px;
            cursor: pointer;
            display:none;
        }

        #alternateLogins svg.show {
            display: inline-block;
        }

        button {
            -moz-appearance: none;
            -webkit-appearance: none;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border: 1px solid transparent;
            border-radius: 3px;
            -webkit-box-shadow: none;
            box-shadow: none;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            font-size: 1rem;
            height: 2.25em;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            line-height: 1.5;
            padding-bottom: calc(0.375em - 1px);
            padding-left: calc(0.625em - 1px);
            padding-right: calc(0.625em - 1px);
            padding-top: calc(0.375em - 1px);
            position: relative;
            vertical-align: top;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: white;
            border-color: #dbdbdb;
            color: #363636;
            cursor: pointer;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding-left: 0.75em;
            padding-right: 0.75em;
            text-align: center;
            white-space: nowrap;
            margin: 5px 0px;
            width: 40%;
        }

        .is-success {
            background-color: #23d160;
            border-color: transparent;
            color: #fff;
        }

        button.is-success:hover{
            background-color: #22c65b;
        }

        button.is-success:active {
            background-color: #20bc56;
        }

        .is-danger {
            background-color: #ff3860;
            border-color: transparent;
            color: #fff;
        }

        .is-link {
            background-color: #3273dc;
            border-color: transparent;
            color: #fff;
        }
        a {
            color: #3273dc;
            cursor: pointer;
        }

        button.is-danger:hover {
            background-color: #ff2b56;
        }

        button.is-danger:active {
            background-color: #ff1f4b;
        }

        button.is-loading {
            color: transparent !important;
            pointer-events: none;
        }

        button.wide {
            width: 100%;
        }

        button.is-loading:after {
            animation: spinAround 500ms infinite linear;
            border: 2px solid white;
            border-radius: 290486px;
            border-right-color: transparent;
            border-top-color: transparent;
            content: "";
            display: block;
            height: 1em;
            position: relative;
            width: 1em;
            position: absolute;
            left: calc(50% - (1em / 2));
            top: calc(50% - (1em / 2));
            position: absolute !important;
        }

        #popupMessage {
            height: 0px;
            width: 100%;
            box-sizing: border-box;
            position: absolute;
            transition: all ease 0.3s;
            padding: 0px 10px;
            margin:0px;
            color: white;
            font-size: 0.8em;
            color: rgba(255, 255, 255, 0);
        }

        #popupMessage.show {
            height: 60px;
            padding: 10px 10px;
            color: rgba(255, 255, 255, 1);
        }

        #backButton {
            position:absolute;
            left: 0px;
            z-index: 2;
            margin: 0px;
            opacity: 0;
            transition: opacity ease 0.3s;
            cursor: pointer;
        }

        #backButton.show {
            opacity: 1;
        }

        #backButton svg {
            height: 30px;
            width: 30px;
        }

    </style>
    <div id="backButton">
    <svg fill="#000000" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
    </div>
    <div id="popupMessage"></div>
    </div>
    <div class="content">
        <img src="" />
        
        <div class="control">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <input class="email" type="text" placeholder="Email..." />
        </div>
        <div id="passwordControl" class="control">
            <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            <input class="password" type="password" placeholder="Password..."/>
        </div>

        <br/>
        <button id="register" class="is-success wide">Register</button>
        <button id="resetPassword" class="is-link wide hide">Send Password Reset Email</button>
        <br/>
        <button id="clear" class="is-danger"> Clear </button>
        <button id="login" class="is-link"> Login </button>
        <br/>
        <a>Forgot your password?</a>

        <div id="alternateLogins">
            <div> Or Login With Social Media </div>

            <svg id="google" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"/>
                <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"/>
                <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 0 0 0 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"/>
                <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"/>
            </svg>

            <svg id="facebook" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.007 19c.55 0 .993-.444.993-.993V1.993c0-.55-.444-.993-.993-.993H1.993C1.443 1 1 1.444 1 1.993v16.014c0 .55.444.993.993.993h16.014zm-4.587 0v-6.97h2.34l.35-2.717h-2.69V7.578c0-.786.218-1.322 1.346-1.322h1.438v-2.43c-.25-.034-1.102-.108-2.096-.108-2.073 0-3.494 1.267-3.494 3.59v2.005H8.268v2.717h2.346V19h2.806z" fill="#3B5998" fill-rule="evenodd"/>
            </svg>
            
            <svg id="twitter" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.924c-.736.326-1.527.547-2.357.646.848-.508 1.498-1.312 1.804-2.27-.792.47-1.67.812-2.605.996C16.092 2.498 15.027 2 13.847 2 11.58 2 9.743 3.837 9.743 6.103c0 .322.037.635.107.935-3.41-.17-6.434-1.804-8.458-4.287-.352.61-.555 1.314-.555 2.066 0 1.423.724 2.68 1.825 3.415-.672-.02-1.305-.206-1.858-.513v.052c0 1.987 1.414 3.645 3.29 4.022-.344.096-.706.146-1.08.146-.265 0-.522-.026-.772-.074.522 1.63 2.037 2.818 3.833 2.85C4.67 15.81 2.9 16.468.98 16.468c-.332 0-.66-.02-.98-.057 1.816 1.166 3.973 1.846 6.29 1.846 7.547 0 11.674-6.253 11.674-11.675 0-.18-.004-.355-.01-.53.8-.58 1.496-1.3 2.046-2.125" fill="#55ACEE" fill-rule="evenodd"/>
            </svg>

            <svg id="github" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.476 0 0 4.477 0 10c0 4.418 2.865 8.166 6.84 9.49.5.09.68-.218.68-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.342 1.087 2.912.83.09-.645.35-1.085.634-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.105-.253-.448-1.27.096-2.647 0 0 .84-.268 2.75 1.026C8.294 4.95 9.15 4.84 10 4.836c.85.004 1.705.115 2.504.337 1.91-1.294 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.578.687.48C17.14 18.163 20 14.417 20 10c0-5.522-4.478-10-10-10" fill="#191717" fill-rule="evenodd"/>
            </svg>
        </div>
    </div>

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
        this.loginButton = this.shadowRoot.querySelector('#login');
        this.clearButton = this.shadowRoot.querySelector('#clear');
        this.regButton = this.shadowRoot.querySelector('#register');
        this.emailInput = this.shadowRoot.querySelector('input.email');
        this.passwordInput = this.shadowRoot.querySelector('.password');
        this.popupMessage = this.shadowRoot.querySelector('#popupMessage');
        this.displayName = this.shadowRoot.querySelector('#displayName');
        this.forgotPasswordLink = this.shadowRoot.querySelector('a');
        this.resetPasswordButton = this.shadowRoot.querySelector('#resetPassword');
        this.backButton = this.shadowRoot.querySelector('#backButton');

        const config = {
            apiKey: this.getAttribute('api-key'),
            authDomain: this.getAttribute('auth-domain'),
          };
        
        this.firebase = firebase.initializeApp(config);
        this.auth = this.firebase.auth();
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        const logo = this.shadowRoot.querySelector('img');
        if(logo) {
            logo.src = this.getAttribute('logo') || '';
        } else {
            logo.style.display = 'none';
        }

        this.loginButton.addEventListener('click', () => {
            this.loginUser(this.emailInput.value, this.passwordInput.value);
        });

        this.regButton.addEventListener('click', () => {
            this.createUser(this.emailInput.value, this.passwordInput.value);
        });

        this.clearButton.addEventListener('click', () => {
            this.clear();
        });

        this.passwordInput.addEventListener('keyup', (e) => {
            if(e.keyCode == 13) {
                this.loginUser(this.emailInput.value, this.passwordInput.value);
            }
        });

        this.forgotPasswordLink.addEventListener('click', () => {
            this.showPasswordReset();
        });

        this.resetPasswordButton.addEventListener('click', () => {
            this.sendPasswordReset();
        });

        this.backButton.addEventListener('click', () => {
            this.showDefaultScreen();
        });

        this.listenForUser();
        this.inputChangeListeners();
        this.showAltLogins();
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
        this.regButton.classList.add('is-loading');
        this.auth.createUserWithEmailAndPassword(email, password)
            .catch( (error) => {
                if(error) {
                    if(error.code === 'auth/email-already-in-use') {
                        this.emailInput.classList.add('is_danger');
                    }else if (error.code === 'auth/weak-password') {
                        this.passwordInput.classList.add('is_danger');
                    }
                    this.showError(error.message);
                }

                this.regButton.classList.remove('is-loading');
          });
    }

    loginUser(email , password){
        console.log(email);
        console.log(password);
        this.loginButton.classList.add('is-loading');
        this.auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
    
                if (error) {
                    console.log(error.code);

                    if(error.code === 'auth/user-not-found' || error.code === 'auth/invalid-email') {
                        this.emailInput.classList.add('is_danger');
                    }else if(error.code === 'auth/wrong-password') {
                        this.passwordInput.classList.add('is_danger');
                    }
                    
                    this.showError(error.message);
                }

                if(this.regButton.classList.contains('is-loading')) {
                    this.regButton.classList.remove('is-loading');
                }
                this.loginButton.classList.remove('is-loading');
          });
    }

    listenForUser() {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in.
              const successString = `Logged in as: <br/> ${user.displayName || user.email}`;
              this.showSuccess(successString);

            if(this.loginButton.classList.contains('is-loading')) {
                this.loginButton.classList.remove('is-loading');
            }

            if(this.regButton.classList.contains('is-loading')) {
                this.regButton.classList.remove('is-loading');
            }
              // ... 
            }
          });
    }

    inputChangeListeners() {
        this.emailInput.addEventListener('change', this.removeDanger);
        this.passwordInput.addEventListener('change', this.removeDanger);
    }

    removeDanger(e) {
        if(e.target.classList.contains('is_danger')) {
            e.target.classList.remove('is_danger');
        }
    }

    clear() {
        this.emailInput.value = '';
        this.passwordInput.value = '';
    }

    resetMessage() {
        const removeClasses = ['is-danger', 'is-success'];
        removeClasses.forEach((className) => {
            if(this.popupMessage.classList.contains(className)) {
                this.popupMessage.classList.remove(className);
            }
        });
    }

    showError(message) {
        this.showMessage(message, true);
    }

    showSuccess(message) {
        this.showMessage(message, false);
    }

    showMessage(message, isError) {
        isError = isError || false;
        this.resetMessage();
        if(isError) {
            this.popupMessage.classList.add('is-danger');
        }else {
            this.popupMessage.classList.add('is-success');
        }

        this.popupMessage.innerHTML = message;
        this.popupMessage.classList.add('show');
    }

    sendPasswordReset() {
        this.resetPasswordButton.classList.add('is-loading');
        this.auth.sendPasswordResetEmail(this.emailInput.value).then(() => {
            this.resetPasswordButton.classList.remove('is-loading');
            this.showSuccess("Password reset email sent!");
          }).catch((error) => {
            this.resetPasswordButton.classList.remove('is-loading');
            this.showError(error.message);
            // An error happened.
          });
    }

    showPasswordReset() {
        this.shadowRoot.querySelector('#passwordControl').classList.add('hide');
        this.regButton.classList.add('hide');
        this.clearButton.classList.add('hide');
        this.loginButton.classList.add('hide');
        this.forgotPasswordLink.classList.add('hide');
        this.shadowRoot.querySelector('#alternateLogins').classList.add('hide');
        this.resetPasswordButton.classList.remove('hide');
        this.backButton.classList.add('show');
    }

    showDefaultScreen() {
        this.shadowRoot.querySelector('#passwordControl').classList.remove('hide');
        this.regButton.classList.remove('hide');
        this.clearButton.classList.remove('hide');
        this.loginButton.classList.remove('hide');
        this.forgotPasswordLink.classList.remove('hide');
        this.shadowRoot.querySelector('#alternateLogins').classList.remove('hide');
        this.resetPasswordButton.classList.add('hide');
        this.backButton.classList.remove('show');
    }

    showAltLogins() {
        const loginMethods = ['facebook', 'google', 'twitter', 'github'];
        const loginProviders = [
            new firebase.auth.FacebookAuthProvider(),
            new firebase.auth.GoogleAuthProvider(),
            new firebase.auth.TwitterAuthProvider(),
            new firebase.auth.GithubAuthProvider()
        ];

        for(let i = 0; i < loginMethods.length; i++) {
            if(this.hasAttribute(loginMethods[i])) {
                let button = this.shadowRoot.querySelector(`#${loginMethods[i]}`);
                button.classList.add('show');
                button.addEventListener('click', () => {
                    this.altLoginWithPopup(loginProviders[i]);
                });
            }
        }
    }

    altLoginWithPopup(provider) {
        this.auth.signInWithPopup(provider).then((result) => {
            
          }).catch((error) => {
                this.showError(error.message);
          });
    }
}

customElements.define("firebase-auth-panel", FirebaseLogin);