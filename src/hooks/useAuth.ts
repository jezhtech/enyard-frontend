import { useEffect, useState, useCallback } from "react";
import { updateProfile, User } from "firebase/auth";
import {
	signInWithEmail,
	signOutUser,
	signUpWithEmail,
	onAuthStateChange,
	sendPasswordReset,
	getIdToken,
	getCurrentUser,
	sendVerificationEmail,
	isUserEmailVerified,
} from "@/firebase/auth";

/**
 * Hook for managing Firebase authentication state
 * Provides auth state, login/logout functions, and loading states
 */
export function useAuth() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Subscribe to auth state changes on mount
	useEffect(() => {
		const unsubscribe = onAuthStateChange((authUser) => {
			setUser(authUser);
			setLoading(false);
		});

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, []);

	const signUp = useCallback(
		async (name: string, email: string, password: string) => {
			setError(null);
			setLoading(true);

			try {
				// 1. Create the Firebase user
				const createdUser = await signUpWithEmail(email, password);

				if (!createdUser) {
					throw new Error("Failed to create user");
				}

				// 2. Update the user's display name in Firebase
				await updateProfile(createdUser, {
					displayName: name,
				});

				// 3. Force a refresh so the updated displayName is included
				await createdUser.reload();

				const refreshedUser = { ...createdUser, displayName: name };

				// 4. Persist to your auth state manager
				setUser(refreshedUser);

				return refreshedUser;
			} catch (err: any) {
				console.error("Signup error:", err);
				setError(err.message || "Signup failed");
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[]
	);
	const verifyEmail = useCallback(async () => {
		setError(null);
		try {
			await sendVerificationEmail();
		} catch (err: any) {
			setError(
				err instanceof Error ? err.message : "Failed to send verification email"
			);
			throw err;
		}
	}, []);
	const checkEmailVerified = useCallback(async (): Promise<boolean> => {
		try {
			return await isUserEmailVerified();
		} catch (err: any) {
			setError(err.message || "Failed to verify email status");
			return false;
		}
	}, []);

	const signIn = useCallback(async (email: string, password: string) => {
		setError(null);
		setLoading(true);
		try {
			const authUser = await signInWithEmail(email, password);
			setUser(authUser);
			return authUser;
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Sign in failed";
			setError(errorMessage);
			throw err;
		} finally {
			setLoading(false);
		}
	}, []);

	const signOut = useCallback(async () => {
		setError(null);
		setLoading(true);
		try {
			await signOutUser();
			setUser(null);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Sign out failed";
			setError(errorMessage);
			throw err;
		} finally {
			setLoading(false);
		}
	}, []);

	const resetPassword = useCallback(async (email: string) => {
		setError(null);
		try {
			await sendPasswordReset(email);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Failed to send reset email";
			setError(errorMessage);
			throw err;
		}
	}, []);

	const getToken = useCallback(async (): Promise<string> => {
		try {
			return await getIdToken();
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Failed to get token";
			setError(errorMessage);
			throw err;
		}
	}, []);

	const clearError = useCallback(() => {
		setError(null);
	}, []);

	return {
		user,
		loading,
		error,
		isAuthenticated: !!user,
		signUp,
		signIn,
		signOut,
		resetPassword,
		getToken,
		clearError,
		getCurrentUser,
		verifyEmail,
		checkEmailVerified,
	};
}

export default useAuth;
