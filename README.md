# firebase-auth-panel
An HTML custom element implementing the `<firebase-auth-panel>` element.

![fun-input in action](https://github.com/Kiricon/firebase-auth-panel/raw/master/screencapture.gif)

## Setup

### Installation
```
npm i firebase-auth-panel
```

---

```Html
<script src="node_modules/firebase-auth-panel/firebase-auth-panel.bundle.js"></script>
```
or if you're bundling
```Javascript
import "firebase-auth-panel";
// or
require("firebase-auth-panel");
```


## Usage
```HTML
<firebase-auth-panel
        logo="logo.jpg" //optional
        google      //optional
        facebook    //optional
        twitter     //optional
        github      //optional
    ></firebase-auth-panel>

<script>
    const panel = document.querySelector('firebase-auth-panel');
    const config = {
        apiKey: '[your api key here...]',
        authDomain: '[your auth domain here...],
    };

    firebase.initializeApp(config);

    panel.setFirebase(firebase);

</script>
```