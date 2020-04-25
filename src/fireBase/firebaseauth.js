
import * as Firebase from "firebase";
import "firebase/firestore";
let config = {
  apiKey: "AIzaSyDtSa69dCl473aEXR2qG1tu8wAAaf91qTc",
    authDomain: "thumb-8c92b.firebaseapp.com",
    databaseURL: "https://thumb-8c92b.firebaseio.com",
    projectId: "thumb-8c92b",
    storageBucket: "thumb-8c92b.appspot.com",
    messagingSenderId: "899678501325",
    appId: "1:899678501325:web:46701c8afbd7dc1c3cec84",
    measurementId: "G-SZKG774WEK"
};
let app;
if (!Firebase.apps.length) {
  app = Firebase.initializeApp(config);
}
export const db = Firebase.firestore(app);
// export const firestore= app.firestore();
