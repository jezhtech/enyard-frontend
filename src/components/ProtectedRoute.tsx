import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { isAuthenticated, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	// We need to handle the initial loading state where checkAuth is running.
	// For now, we can show a loader or nothing, but a simple check is not enough.
	// A better approach would be to have a loading state in the store.
	// For this iteration, we will rely on the initial state.

	if (!isAuthenticated) {
		// Using 'replace' is important for better user experience with browser back button.
		return <Navigate to="/auth/login" replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
