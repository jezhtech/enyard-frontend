import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SeoMeta } from "@/components/SeoMeta";
import { PAGE_PATHS } from "@/seo/routeMeta";
import useAuth from "@/hooks/useAuth";
import useApiRequest from "@/hooks/useApiRequest";
import { getIdToken } from "@/firebase/auth";

const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();
	const {
		verifyEmail,
		signUp,
		error: authError,
		loading: authLoading,
		clearError,
	} = useAuth();
	const { post } = useApiRequest();

	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		clearError();
		setIsLoading(true);
		// Validation
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			setIsLoading(false);
			return;
		}

		if (password.length < 6) {
			alert("Password must be at least 6 characters");
			setIsLoading(false);
			return;
		}
		try {
			// Step 1: Create Firebase user
			const user = await signUp(name, email, password);
			if (!user.emailVerified) {
				await verifyEmail();
				navigate("/auth/verify-email");
			}
		} catch (err) {
			toast({
				variant: "destructive",
				title: "Registration Failed",
				description: err.message,
			});
			setIsLoading(false);
			return;
		}

		try {
			// Retrieve ID token from Firebase and attach to Authorization header
			let token: string | null = null;
			try {
				token = await getIdToken();
			} catch (tokenErr) {
				console.warn("Failed to get ID token:", tokenErr);
			}

			const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

			await post("/api/auth/register-firebase", { name }, { headers });
		} catch (err) {
			toast({
				title: "Registration Failed",
				description: err.message,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<SeoMeta path={PAGE_PATHS.REGISTER} />
			<TabsContent value="/auth/register">
				<Card className="glass border-0 shadow-enyard">
					<CardHeader>
						<CardTitle>Register</CardTitle>
						<CardDescription>Create a new client account</CardDescription>
					</CardHeader>

					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							{/* First Name */}
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									type="text"
									placeholder="Name"
									className="glass"
									value={name}
									onChange={(e) => {
										const value = e.target.value;
										setName(value);
									}}
									required
								/>
							</div>
							{/* Email */}
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="your@company.com"
									className="glass"
									value={email}
									onChange={(e) => {
										const value = e.target.value;
										setEmail(value);
									}}
									required
								/>
							</div>
							{/* Password */}
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									className="glass"
									value={password}
									onChange={(e) => {
										const value = e.target.value;
										setPassword(value);
									}}
									required
								/>
							</div>
							{/* Password */}
							<div className="space-y-2">
								<Label htmlFor="confirmpassword">Confirm Password</Label>
								<Input
									id="Confirmpassword"
									type="password"
									className="glass"
									value={confirmPassword}
									onChange={(e) => {
										const value = e.target.value;
										setConfirmPassword(value);
									}}
									required
								/>
							</div>

							<Button className="w-full" type="submit" disabled={isLoading}>
								{isLoading ? (
									<Loader2 className="h-4 w-4 animate-spin" />
								) : (
									"Verify Email"
								)}
							</Button>
						</form>

						<div className="mt-4 text-center text-sm">
							Already have an account?{" "}
							<Link to="/auth/login" className="underline">
								Sign in
							</Link>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</>
	);
};

export default Register;
