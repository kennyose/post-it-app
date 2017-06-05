import { usersRef, firebaseAuth } from '../firebase/firebase';

export function auth (username,email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(() => {
				// add element to database
        var result = firebaseAuth().currentUser;
              usersRef.child(result.uid).set({
                  username,
                  email,
                  uid: result.uid
				});
				res.send('Signup Successful');
        console.log('success')
			})
			.catch((error) => {
				res.send('Error');
			});
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
