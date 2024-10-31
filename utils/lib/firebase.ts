import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import dotenv from "dotenv";

dotenv.config();


export default !getApps().length
? initializeApp({ credential: cert({
  // @ts-ignore
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    project_id: process.env.FIREBASE_PROJECT_ID,
    client_id: process.env.FIREBASE_CLIENT_ID,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  }) })
  : getApp();
