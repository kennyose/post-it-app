import { usersRef, firebaseAuth, groupRef } from '../firebase/firebase';




// Sign Up Authentication
export const auth = (username, email, pw) => {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(() => {
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


// SignIn Authentication
export const login = (email, pw) =>  {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
    .catch((error) => {
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


// This will allow authenticated users create group
export const group = (groupID) => {
  return groupRef
    .child(groupID)
    .once('value', (snapshot) => {
      if (!snapshot.exists()) {
        groupRef
      .child(groupID)
      .set({
        id: groupID,
        users: null
      })
      .then(() => {
        console.log(`Group ${groupID} created`);
      })
      .catch((err) => {
        console.log(err);
      });
      } else {
        console.log('Group already exists');
      }
    });
};
