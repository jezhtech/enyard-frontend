import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * Firebase Client SDK Configuration
 * These are public credentials - safe to expose in frontend code
 * Get these from Firebase Console: Project Settings → Your apps → Web
 */
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
	appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

/**
 * Validate Firebase configuration
 */
function validateFirebaseConfig(): void {
	const requiredKeys: (keyof typeof firebaseConfig)[] = [
		"apiKey",
		"authDomain",
		"projectId",
		"storageBucket",
		"messagingSenderId",
		"appId",
	];

	const missingKeys = requiredKeys.filter((key) => !firebaseConfig[key]);

	if (missingKeys.length > 0) {
		console.warn(
			`⚠️ Missing Firebase configuration: ${missingKeys.join(", ")}. ` +
				`Please check your .env file and ensure all required Firebase credentials are set.`
		);
	}
}

// Validate on import
validateFirebaseConfig();

/**
 * Initialize Firebase App
 */
export const firebaseApp = initializeApp(firebaseConfig);

/**
 * Get Firebase Auth instance
 */
export const auth = getAuth(firebaseApp);
console.log("Firebase Auth initialized:", auth);

/**
 * Get Firebase Firestore instance
 */
export const db = getFirestore(firebaseApp);

export default firebaseApp;
