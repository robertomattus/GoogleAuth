const User = require("../models/user.model");

const handleUserCreated = async (data) => {
  const { id, email_addresses, first_name, last_name } = data;

  const existing = await User.findOne({ clerkId: id });
  if (existing) return;

  const email = email_addresses[0]?.email_address;

  await User.create({
    clerkId: id,
    email,
    fullName: `${first_name || ""} ${last_name || ""}`.trim(),
  });
};

module.exports = { handleUserCreated };
