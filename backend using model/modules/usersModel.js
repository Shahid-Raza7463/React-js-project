const con = require('../../db/config');

// Function to get all users
const getAllUsers = (callback) => {
    const query = 'SELECT * FROM users';
    con.query(query, callback);
};

// Function to get a user by ID
const getUserById = (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    con.query(query, [id], callback);
};

// Function to create a new user
const createUser = (userData, callback) => {
    const query = 'INSERT INTO users SET ?';
    con.query(query, userData, callback);
};

// Function to update a user by ID
const updateUserById = (id, userData, callback) => {
    const query = 'UPDATE users SET ? WHERE id = ?';
    con.query(query, [userData, id], callback);
};

// Function to delete a user by ID
const deleteUserById = (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    con.query(query, [id], callback);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
};
