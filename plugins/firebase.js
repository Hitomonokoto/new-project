const firebase = require('firebase/app');
require('firebase/firestore');

const config = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_PROJECTID,
    storageBucket: '',
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}
const db = firebase.firestore();

export default db