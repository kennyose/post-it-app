import { usersRef, firebaseAuth } from '../firebase/firebase';

// Sign Up Authentication
export const auth = (username, email, pw) => {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(() => {
// add element to database
      const result = firebaseAuth().currentUser;
      usersRef.child(result.uid).set({
        username,
        email,
        uid: result.uid
      });
    })
.catch((error) => {
  alert(error);
});
};


// User Logout
export const logout = () => {
  return firebaseAuth().signOut();
};


// User SignIn
export const login = (email, pw) =>  {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
    .catch((error) => {
  // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
        alert(error);
    });
};


// Reset Password
export const resetPassword = (email) => {
  return firebaseAuth().sendPasswordResetEmail(email);
};


export const saveUser = (user) => {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
};
