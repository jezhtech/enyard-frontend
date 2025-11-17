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

const nameRegex = /^[A-Z a-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const { toast } = useToast();

	// -------------------------------
	// Registration submission handler
	// -------------------------------
	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		navigate("/auth/verify-email");
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
						<form onSubmit={handleRegister} className="space-y-4">
							{/* First Name */}
							<div className="space-y-2">
								<Label htmlFor="firstName">First Name</Label>
								<Input
									id="firstName"
									type="text"
									placeholder="First Name"
									className="glass"
									value={firstName}
									onChange={(e) => {
										const value = e.target.value;
										if (nameRegex.test(value)) {
											setFirstName(value);
										}
									}}
									required
								/>
							</div>

							{/* Last Name */}
							<div className="space-y-2">
								<Label htmlFor="lastName">Last Name</Label>
								<Input
									id="lastName"
									type="text"
									placeholder="Last Name"
									className="glass"
									value={lastName}
									onChange={(e) => {
										const value = e.target.value;
										if (nameRegex.test(value)) {
											setLastName(value);
										}
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
										if (emailRegex.test(value)) {
											setEmail(value);
										}
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
