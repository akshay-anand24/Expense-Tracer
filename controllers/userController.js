const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({email:req.body.email});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers=async (req,res)=>{
  const data=await User.find()
  res.send(data)
}

exports.userExist=async(e)=>{
  const user=await User.find({email:e})
  return user
}

exports.deleteAll=async(req,res)=>{
  try {
    await User.deleteMany({});
    res.status(200).json({ message: 'All users have been deleted.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting users.' });
  }
}
