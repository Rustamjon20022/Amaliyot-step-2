const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, lowercase: true },
    phone: { type: String, required: true, max: 50 },
    fullname: { type: String, maxlength: 1000 },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(normalize);
module.exports = mongoose.model("user", UserSchema);
