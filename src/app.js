const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//? Import and configure Clerk client
const { createClerkClient } = require("@clerk/backend");

//? Creates Clerk client for backend API access using the secret key
const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

//? Test endpoint to get user list
app.get("/", async (req, res) => {
  try {
    const userList = await clerkClient.users.getUserList();
    res.json(userList);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Could not get users" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
