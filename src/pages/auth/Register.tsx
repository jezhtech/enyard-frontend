import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
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
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SeoMeta } from "@/components/SeoMeta";
import { PAGE_PATHS } from "@/seo/routeMeta";

const Register = () => {
	const { signUp, loading, user } = useAuthContext();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [phone, setPhone] = useState("");
	const [countryCode, setCountryCode] = useState("+91");

	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const [submitting, setSubmitting] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setSubmitting(true);

		try {
			const user = await signUp(email, password, displayName);

			setSubmitting(false);

			toast({
				title: "Registration Successful",
				description: "Your account has been created. Please log in.",
			});
			console.log("Registered user:", user);

			navigate("/login");
		} catch (err: any) {
			setSubmitting(false);

			const message =
				err?.message || "Registration failed due to an unexpected error.";

			setError(message);

			toast({
				title: "Registration Failed",
				description: message,
				variant: "destructive",
			});
		}
	};

	return (
		<>
			<SeoMeta path={PAGE_PATHS.REGISTER} />
			<TabsContent value="/register">
				<Card className="glass border-0 shadow-enyard">
					<CardHeader>
						<CardTitle>Register</CardTitle>
						<CardDescription>Create a new client account</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={onSubmit} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									type="text"
									placeholder="your Name"
									className="glass"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="your@company.com"
									className="glass"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="phone">Mobile Number</Label>

								<div className="flex gap-2">
									{/* Country Code Dropdown */}
									<select
										value={countryCode}
										onChange={(e) => setCountryCode(e.target.value)}
										className="glass px-3 py-2 rounded-md border bg-white/10 backdrop-blur-md">
										<option value="+91">🇮🇳 +91</option>
										<option value="+1">🇺🇸 +1</option>
										<option value="+44">🇬🇧 +44</option>
										<option value="+61">🇦🇺 +61</option>
										<option value="+81">🇯🇵 +81</option>
										<option value="+971">🇦🇪 +971</option>
										<option value="+65">🇸🇬 +65</option>
									</select>

									{/* Phone Input */}
									<Input
										id="phone"
										type="tel"
										placeholder="Mobile Number"
										className="glass w-full"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<div className="relative">
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Create a password"
										className="glass pr-10"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
									<Button
										type="button"
										variant="ghost"
										size="sm"
										className="absolute right-0 top-0 h-full px-3"
										onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? (
											<EyeOff className="h-4 w-4" />
										) : (
											<Eye className="h-4 w-4" />
										)}
									</Button>
								</div>
							</div>
							<Button className="w-full" type="submit" disabled={isLoading}>
								{isLoading ? (
									<Loader2 className="h-4 w-4 animate-spin" />
								) : (
									"Create Account"
								)}
							</Button>
						</form>
						<div className="mt-4 text-center text-sm">
							Already have an account?{" "}
							<Link to="/login" className="underline">
								Sign in
							</Link>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</>
	);
};

// export default Register;
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { TabsContent } from "@/components/ui/tabs";
// import { Eye, EyeOff, Loader2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { authService } from "@/services/auth";
// import { SeoMeta } from "@/components/SeoMeta";
// import { PAGE_PATHS } from "@/seo/routeMeta";

// const Register = () => {
// 	const [showPassword, setShowPassword] = useState(false);
// 	const [firstName, setFirstName] = useState("");
// 	const [lastName, setLastName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [isLoading, setIsLoading] = useState(false);
// 	const navigate = useNavigate();
// 	const { toast } = useToast();

// 	const handleRegister = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		setIsLoading(true);
// 		try {
// 			await authService.register({ firstName, lastName, email, password });
// 			toast({
// 				title: "Registration Successful",
// 				description: "You can now log in.",
// 			});
// 			navigate("/login");
// 		} catch (error: any) {
// 			toast({
// 				title: "Registration Failed",
// 				description: error.message || "An unexpected error occurred.",
// 				variant: "destructive",
// 			});
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

// };

export default Register;
