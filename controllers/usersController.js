import Users from "../Models/Users.js";

const usersController = {
  get: async (req, res) => {
    try {
      const users = await Users.find();
      res.json({ users });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  getById: async (req, res) => {
    try {
      const user = await Users.findById(req.params.id);//שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  add: async (req, res) => {
    const { name, email, password, links } = req.body;
    try {
      const newUser = await Users.create({ name, email, password, links }); // הוספת משתמש חדש עם כל השדות
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await Users.findByIdAndUpdate(id, req.body, {
        new: true,
      });//עדכון לפי מזהה
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Users.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};
export default usersController;
