import Links from "../Models/Links.js";

const linksController = {
  redirect: async (req, res) => {
    try {
      const id = req.params.id;
      const ipAddress = req.ip; // ניתן לקבל את כתובת ה-IP מהבקשה
      const targetParamValue = req.query.t || "";

      const myLink = await Links.findById(id);
      if (!myLink) {
        return res.status(404).json({ message: "Link not found" });
      }

      myLink.clicks.push({ ipAddress, targetParamValue });
      await myLink.save();

      res.redirect(myLink.originalUrl);

    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getClickStats: async (req, res) => {
    const id = req.params.id;

    try {
      const link = await Links.findById(id);
      if (!link) {
        return res.status(404).json({ message: "Link not found" });
      }

      const clickStats = link.clicks.reduce((acc, click) => {
        const target = click.targetParamValue;
        if (!acc[target]) {
          acc[target] = 0;
        }
        acc[target]++;
        return acc;
      }, {});

      res.json({ clickStats });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  get: async (req, res) => {
    try {
      const links = await Links.find();
      res.json({ links });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const link = await Links.findById(req.params.id);//שליפה לפי מזהה
      res.json(link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { originalUrl } = req.body;
    try {
      const newLink = await Links.create({ originalUrl });//הוספת חדש
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await Links.findByIdAndUpdate(id, req.body, {
        new: true,
      });//עדכון לפי מזהה
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Links.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};
export default linksController;
