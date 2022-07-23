import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBgDoS4ecEQMMo0vxFkyWZzV7Ogh_dccQ0',
    authDomain: 'fir-basics-e8978.firebaseapp.com',
    projectId: 'fir-basics-e8978',
    storageBucket: 'fir-basics-e8978.appspot.com',
    messagingSenderId: '628808333904',
    appId: '1:628808333904:web:ef1cd5d998c3ca1ba82f55',
};

export const app = firebase.initializeApp(firebaseConfig);
