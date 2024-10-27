import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  createdAt: { type: Date },
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  phoneNumber: { type: String },
  emailVerified: { type: Boolean },
  role: { type: String },
  gender: { type: String },
  year: { type: String },
  profilePic: { type: String },
  aboutMe: { type: String },
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

export default mongoose.model("clients", clientSchema);
