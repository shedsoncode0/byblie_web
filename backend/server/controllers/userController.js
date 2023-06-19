const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

// Update user
const update = async (req, res) => {
    // Get all the user details from the request Body
    let { userId, password } = req.body; 
    const { id } = req.params; 

    if(userId === id || isAdmin) {
        
        // If user try to update pasword
        if(password) {
            try {
                //Hashing the user password before updating it
                const salt = await bcrypt.genSalt(10)
                password = await bcrypt.hash(password, salt);
            } catch (error) {
                return res.status(500).json(error.message);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(id,{$set: req.body});
            return res.status(200).json({message: "Account has been updated"});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    } else {
        res.status(403).json({message: "You can update only your account"});
    }
}


// Delete user
const deleteUser = async (req, res) => {
    // Get all the user details from the request Body
    let { userId, isAdmin } = req.body; 
    const { id } = req.params; 

    if(userId === id || isAdmin) {
        try {
            const user = await User.findByIdAndDelete(id);
            return res.status(200).json({message: "Account has been deleted successfully"});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    } else {
        res.status(403).json({message: "You can delete only your account"});
    }
}

// Get a sigle user
const getUser = async (req, res) => {
    // Get id from the request req.params
    const { id } = req.params; 

    try {
        const user = await User.findById(id);
        const {password, updatedAt, ...other} = user._doc;
        return res.status(200).json(other);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    update,
    deleteUser,
    getUser,
}