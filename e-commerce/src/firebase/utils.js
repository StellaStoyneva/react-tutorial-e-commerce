import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBtD-_YxuSts5uWdjfY8G0y6o0ef_LnoQQ",
  authDomain: "e-commece2.firebaseapp.com",
  projectId: "e-commece2",
  storageBucket: "e-commece2.appspot.com",
  messagingSenderId: "12700862161",
  appId: "1:12700862161:web:673efa2584c3922e43a7f0"
};

export const createUserProfileDocument = async(userAuth, additionalData) =>{
  if(!userAuth){
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error);
    }
    
    return userRef;
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;