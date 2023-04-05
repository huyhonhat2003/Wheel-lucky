import userModel from "../model/userModel.js";
const user = {
  getAll: async (req, res) => {
    try {
      const allUser = await userModel.find();
      res.status(200).json(allUser);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  createUser: async (req, res) => {
    try {
      const newUser = new userModel(req.body);
      newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const newUser = await userModel.deleteOne(req.body);
      res.status(200).json({ idUserDeleted: req.body._id });
    } catch (error) {
      res.status(500).json(err);
    }
  },
};
export default user;
