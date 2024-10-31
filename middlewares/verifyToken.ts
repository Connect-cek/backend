import { DecodedIdToken, getAuth } from "firebase-admin/auth";
import adminApp from "../utils/lib/firebase";

const adminAuth = getAuth(adminApp);

const verifyToken = async (
  req: { headers: { authorization: string }; user: DecodedIdToken },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: { message: string }): void; new (): any };
    };
  },
  next: () => void
) => {
  const idToken = req.headers.authorization.replace("Bearer ", "");
  if (!idToken) {
    res.status(401).send({ message: "Token not found" });
  }
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
};

export default verifyToken;
