const UserModel = require('../Models/user_model');
const { generateToken, validateToken } = require('../Utils/validation_jwt');

const createUser = async (req, res) => {
    const user = await new UserModel(req.body)
    await user.save();
    res.status(201).send(user);
};

const getUser = async(req, res) => {
    const reqId = req.params.id
    const id = await UserModel.findById(reqId)
    res.status(200).send(id)
}

const signUpUser = async(req,res) =>{
    const payload = req.body;
    const token = await generateToken(payload);
    res.send(token)
}


module.exports = {
    createUser,
    getUser,
    signUpUser
}
