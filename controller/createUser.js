const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existUser =  await user.findOne({ email : email });
        if(existUser){
            return res.send("User exist");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({
            email : email,
            password : hashedPassword
        })

        const token = jwt.sign({email : newUser.email, id : newUser._id}, "API");
        res.json({user: newUser, token: token});

    } catch (e) {
        res.send("there is error" + e);
    }
}

const login = async (req, res) => {
    try {
        const { email , password } = req.body;

        const existingUser = await user.findOne({ email : email });
        if(!existingUser){
            return res.send("User not found");
        }

        const decryptedPassword = await bcrypt.compare(password, existingUser.password);
        if(!decryptedPassword){
            return res.send("Password not matched");
        }

        const token = jwt.sign({ email : existingUser.email, id : existingUser.password}, "API");
        res.json({user : existingUser, token : token});
    } catch (e) {
        res.send("There is an Error" + e);
    }
}

module.exports = { register, login };