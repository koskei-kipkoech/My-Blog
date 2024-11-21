const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass, 
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//login
router.post("/login", async (req, res) => {
    try {
        // Check if the user exists
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json("Wrong Credentials");
        }

        // Validate the password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            return res.status(400).json("Wrong Credentials");
        }

        // Successful login
        const { password, ...others } = user._doc; // Exclude the password from the response
        return res.status(200).json(others);
    } catch (error) {
        // Handle unexpected server errors
        return res.status(500).json({ message: error.message });
    }
});



module.exports = router;