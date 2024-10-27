// import { Request, Response } from "express";
// import { validationResult } from "express-validator";
// import { signupController } from "../controllers/signup.controller";

// /*
//   Signup
//    @param req Request object
//    @param res Response object

//    METHOD: POST
 
//    @returns Response object
// */


// export const signup = async (req: Request, res: Response) => {
//   try {
//     if (
//       !process.env.ACCESS_TOKEN_SECRET ||
//       !process.env.REFRESH_TOKEN_SECRET ||
//       !process.env.REGISTER_TOKEN_SECRET
//     ) {
//       res.status(500).json({ message: "Internal server error: ERR1242", ok: false });
//       return;
//     }

//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array(), ok: false });
//     }

//     const { email, password, fullName } = req.body;

//     const result:any = await signupController(email, password, fullName);

//     if (result.error) {
//       return res.status(result.status).json({ message: result.message, ok: false });
//     }

//     res.cookie("access_token", result.accessTokenEncoded, {
//       httpOnly: true,
//       secure: true,
//       sameSite: "strict",
//       maxAge: result.TTL_ACCESS_TOKEN_AS_INT,
//     });
//     res.cookie("refresh_token", result.refreshTokenEncoded, {
//       httpOnly: true,
//       secure: true,
//       maxAge: result.TTL_REFRESH_TOKEN_AS_INT,
//     });

//     return res.status(200).json({
//       client: result.client,
//       ok: true,
//       message: "Signup is completed successfully. Please verify your email.",
//     });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Internal server error", ok: false });
//   }
// };
