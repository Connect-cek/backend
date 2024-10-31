import express from "express";
import { signinValidationRules } from "../middlewares/validator/signin.validator";
import { signin } from "../services/signin";
const router = express.Router();

/*
    Signin
     ENDPONT: /signin
     METHOD: POST
     BODY: JSON Object{
            uid: string,
            email: string, 
            displayName: string,
            photoURL : string,
        }
     
     @returns Response object
*/
router.post("/signin", signinValidationRules, signin);


export default router;
