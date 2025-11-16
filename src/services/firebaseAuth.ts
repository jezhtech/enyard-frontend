import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signOut,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";

import { auth } from "@/lib/firebaseClient";

const provider = new GoogleAuthProvider();

export async function signUpWithEmail(
	email: string,
	password: string,
	displayName?: string
) {
	const { user } = await createUserWithEmailAndPassword(auth, email, password);

	if (displayName) {
		await updateProfile(user, { displayName });
	}
	// 🔥 Send verification email
	await sendEmailVerification(user);

	return user;
}

export async function signInWithEmail(email: string, password: string) {
	return signInWithEmailAndPassword(auth, email, password);
}

export async function signInWithGoogle() {
	return signInWithPopup(auth, provider);
}

export async function sendPasswordReset(email: string) {
	return sendPasswordResetEmail(auth, email);
}

export async function signOutUser() {
	return signOut(auth);
}
