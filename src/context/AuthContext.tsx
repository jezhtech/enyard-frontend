// src/context/AuthContext.tsx

import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
	useCallback,
} from "react";

import { User, getIdTokenResult, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import * as firebaseAuth from "@/services/firebaseAuth";

interface AuthContextType {
	user: User | null;
	claims: Record<string, any>;
	loading: boolean;
	signUp: (
		email: string,
		password: string,
		displayName?: string
	) => Promise<User>;
	signIn: (email: string, password: string) => Promise<void>;
	signInWithGoogle: () => Promise<void>;
	signOut: () => Promise<void>;
	sendPasswordReset: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [claims, setClaims] = useState<Record<string, any>>({});
	const [loading, setLoading] = useState(true);

	// --- Listen to Firebase auth state ---
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			if (!currentUser) {
				setUser(null);
				setClaims({});
				setLoading(false);
				return;
			}

			const tokenResult = await getIdTokenResult(currentUser, true);
			setUser(currentUser);
			setClaims(tokenResult.claims || {});
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	// --- Sign Up ---
	const signUp = useCallback(
		async (email: string, password: string, displayName?: string) => {
			// Let Firebase handle state; do NOT set loading here
			const user = await firebaseAuth.signUpWithEmail(
				email,
				password,
				displayName
			);
			return user; // 🔥 return it
		},
		[]
	);

	// --- Sign In ---
	const signIn = useCallback(async (email: string, password: string) => {
		await firebaseAuth.signInWithEmail(email, password);
	}, []);

	// --- Google Auth ---
	const signInWithGoogle = useCallback(async () => {
		await firebaseAuth.signInWithGoogle();
	}, []);

	// --- Sign Out ---
	const signOut = useCallback(async () => {
		await firebaseAuth.signOutUser();
	}, []);

	// --- Password Reset ---
	const sendPasswordReset = useCallback(async (email: string) => {
		return firebaseAuth.sendPasswordReset(email);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				claims,
				loading,
				signUp,
				signIn,
				signInWithGoogle,
				signOut,
				sendPasswordReset,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
	return ctx;
};
