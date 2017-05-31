var {firebase, db, usersRef, groupRef} = require("../config");


class Group {
	static createGroup(req, res) {
		const groupID = req.body.groupname;

		groupRef
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
							res.send(`Group ${groupID} created`);
						})
						.catch((err) => {
							res.send('Error');
						});

				} else {
					res.send('Group already exists')
				}
			})
	}

	static addUser(req, res) {
		const groupID = req.params.groupID;
		// Firebase get all users
		const uid = req.params.uid;
		usersRef
			.child(uid)
			.once('value', (snapshot) => {
				const userEmail = snapshot
					.val()
					.email;

				groupRef
					.child(groupID)
					.child("users")
					.push(userEmail)
					.then(() => {
						res.send('User added successfully');
					});
			})
			.catch((err) => {
				res.send('Error');
			});
	}
}


module.exports = Group;
