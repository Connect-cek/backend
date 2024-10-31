import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { signinController } from "../controllers/signin.controller";

/*
  Signin
   @param req Request object
   @param res Response object

   METHOD: POST
 
   @returns Response object
*/

export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array(), ok: false });
      return;
    }

    const result: any = await signinController(req.body);

    if (result.error) {
      res.status(result.status).json({ message: result.message, ok: false });
      return;
    }

    res.status(200).json({
      user: result.user,
      ok: true,
      message: "Signin is completed successfully.",
    });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ message: "Internal server error", ok: false });
  }
};
