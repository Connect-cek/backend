import { body } from "express-validator";

export const signinValidationRules = [
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email format")
        .custom((value) => {
            const domain = value.split('@')[1];
            if (domain !== 'cek.ac.in') {
                throw new Error('Email must be from the domain cek.ac.in');
            }
            return true;
        }),
    body("uid").notEmpty().withMessage("Description is required"),
    body("displayName").notEmpty().withMessage("Location is required"),
    body("photoURL").notEmpty().withMessage("Schedule is required"),
];
