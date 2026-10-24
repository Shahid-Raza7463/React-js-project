const UserModel = require('./usersModel');

// Get all users
const getAllUsers = (req, res) => {
    UserModel.getAllUsers((err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
};

// Get a user by ID
const getUserById = (req, res) => {
    const userId = req.params.id;
    UserModel.getUserById(userId, (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results[0]);
    });
};

// Create a new user
const createUser = (req, res) => {
    const userData = req.body;
    UserModel.createUser(userData, (err, results) => {
        if (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ success: true, message: 'User created successfully', userId: results.insertId });
    });
};

// Update a user by ID
const updateUserById = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    UserModel.updateUserById(userId, userData, (err, results) => {
        if (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ success: true, message: 'User updated successfully' });
    });
};

// Delete a user by ID
const deleteUserById = (req, res) => {
    const userId = req.params.id;
    UserModel.deleteUserById(userId, (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ success: true, message: 'User deleted successfully' });
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};
