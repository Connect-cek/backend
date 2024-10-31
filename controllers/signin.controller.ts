import User from "../models/user";
import { signinBody } from "../utils/type";

export const signinController = async (body: signinBody) => {
  try {
    const { uid, email, displayName, photoURL } = body;

    const user = await User.findOneAndUpdate(
      { uid },
      {
        email,
        displayName,
        photoURL,
        lastLogin: new Date(),
      },
      { upsert: true, new: true }
    );

    return {
      error: false,
      user: user,
      status: 200,
    };
  } catch (error) {
    return { error: true, status: 500, message: "Internal server error" };
  }
};
