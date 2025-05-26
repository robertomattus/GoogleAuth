const { handleUserCreated } = require("../services/user.service");

const handleClerkWebhook = async (req, res) => {
  const event = JSON.parse(req.body); // Clerk sends raw body

  if (event.type === "user.created") {
    try {
      await handleUserCreated(event.data);
      return res.status(200).json({ message: "User stored in DB" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to save user" });
    }
  }

  res.status(200).json({ message: "Webhook received" });
};

module.exports = { handleClerkWebhook };
