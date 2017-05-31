var {firebase, db, usersRef, groupRef} = require("../config");


class User {
	static signup(req, res) {
		console.log(req.body)
		const username = req.body.username;
		const password = req.body.password;
		const email = req.body.email;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				// add element to database
				usersRef.push({
					username: username,
					password: password,
					email: user.email
				});
				res.send('Signup Successful');
			})
			.catch((error) => {
				res.send('Error');
			});
	}

	static signin(req, res) {
		const email = req.body.email;
		const password = req.body.password;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				res.send('Signin Successful');
			})
			.catch((error) => {
				res.send('Error');
			});
	}

	static signout(req, res) {
		firebase
			.auth()
			.signOut()
			.then(() => {
				res.send('User signed out');
			})
			.catch((error) => {
				res.send('Error');
			});
	}
}


module.exports = User;
