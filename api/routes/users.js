const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//Update user
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const UpdatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(UpdatedUser);
        
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }else{
        res.status(401).json("You Can Only Update Your Account")
    }

});

//Delete User
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id) {
        try{
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({username:user.username})
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been Deleted...  ");
            }catch (error){
                res.status(500).json(error)
            }
        } catch (error) {
            res.status(404).json("User not Found!");
        }
    }else{
        res.status(401).json("You Can Only Delete Your Account")
    }

});

//get user
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(error){
        res.status(500).jon(error)
    }
})


module.exports = router