import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { serviceAccount } from "@/env/firebase";

// Initialize Firebase
const app = initializeApp(serviceAccount);
export const storage = getStorage(app)