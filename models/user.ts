import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  createdAt: { type: Date },
  lastLogin: { type: Date },
  fullName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  role: { type: String },
  gender: { type: String },
  year: { type: String },
  profilePic: { type: String },
  bio: { type: String },
  course: { type: String },
  institute: {
    id: { type: String },
    name: { type: String },
  },
  state: { type: String },
  district: { type: String },
  status: { type: String },
  intrestedFields: { type: [String] },
});

export default mongoose.model("users", userSchema);
