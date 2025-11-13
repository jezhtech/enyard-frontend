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
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";
import { SeoMeta } from "@/components/SeoMeta";
import { PAGE_PATHS } from "@/seo/routeMeta";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const login = useAuthStore((state) => state.login);
	const navigate = useNavigate();
	const { toast } = useToast();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await login({ email, password });
			toast({
				title: "Login Successful",
				description: "Welcome back!",
			});
			navigate("/dashboard");
		} catch (error: any) {
			console.error(error);
			toast({
				title: "Login Failed",
				description: error.message || "An unexpected error occurred.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<SeoMeta path={PAGE_PATHS.LOGIN} />
			<TabsContent value="/login">
				<Card className="glass border-0 shadow-enyard">
					<CardHeader>
						<CardTitle>Client Login</CardTitle>
						<CardDescription>
							Access your products and subscription status
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleLogin} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="client-email">Email</Label>
								<Input
									id="client-email"
									type="email"
									placeholder="your@company.com"
									className="glass"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="client-password">Password</Label>
								<div className="relative">
									<Input
										id="client-password"
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
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
							<div className="flex items-center justify-between">
								<Link
									to="/forgot-password"
									className="text-sm text-primary hover:underline">
									Forgot password?
								</Link>
								<Link
									to="/register"
									className="text-sm text-primary hover:underline">
									Sign up
								</Link>
							</div>
							<Button className="w-full" type="submit" disabled={isLoading}>
								{isLoading ? (
									<Loader2 className="h-4 w-4 animate-spin" />
								) : (
									"Sign In to Dashboard"
								)}
							</Button>
						</form>
					</CardContent>
				</Card>
			</TabsContent>
		</>
	);
};

export default Login;
