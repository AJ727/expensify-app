import { firebase, googleAuthProvider } from '../firebase/firebase';

// async
export const startLogin = () => {
    return () => {
        // takes provider as first arg
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};