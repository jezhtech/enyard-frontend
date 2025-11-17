import { SeoMeta } from "@/components/SeoMeta";
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
import { PAGE_PATHS } from "@/seo/routeMeta";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhoneNumber = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const [countryCode, setCountryCode] = useState("+91");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		navigate("/auth/verify-email");
	};

	return (
		<>
			<SeoMeta path={PAGE_PATHS.PHONE} />
			<div className="min-h-screen flex items-center justify-center bg-muted/30 p-6">
				<div className="relative z-10 w-full max-w-md">
					{/* Logo */}
					<div className="text-center mb-8 gap-4 flex flex-col items-center">
						<img
							src="/lovable-uploads/98fab40e-4f49-42c5-bf83-50cb4020d1a4.png"
							alt="ENYARD"
							className="h-8 w-auto mx-auto mb-4"
						/>
						<Card className="glass border-0 shadow-enyard">
							<CardHeader>
								<CardTitle>Add your mobile number</CardTitle>
								<CardDescription>for future communication</CardDescription>
							</CardHeader>

							<CardContent>
								<form onSubmit={handleRegister} className="space-y-4">
									{/* First Name */}
									<div className="space-y-2">
										<Label htmlFor="phone">Phone Number</Label>

										<div className="flex gap-3">
											<select
												className="glass border rounded px-3 py-2 text-sm"
												value={countryCode}
												onChange={(e) => setCountryCode(e.target.value)}>
												<option value="+1">🇺🇸 +1</option>
												<option value="+44">🇬🇧 +44</option>
												<option value="+61">🇦🇺 +61</option>
												<option value="+91">🇮🇳 +91</option>
												<option value="+971">🇦🇪 +971</option>
												<option value="+81">🇯🇵 +81</option>
												<option value="+49">🇩🇪 +49</option>
											</select>

											<Input
												id="phone"
												type="tel"
												placeholder="9876543210"
												className="glass flex-1"
												value={phoneNumber}
												onChange={(e) => {
													const value = e.target.value;
													if (/^[0-9]*$/.test(value)) {
														setPhoneNumber(value);
													}
												}}
												required
											/>
										</div>
									</div>

									<Button
										className="w-full"
										type="submit"
										disabled={isLoading}
										onClick={() => {
											navigate("/auth/otp-verification");
										}}>
										{isLoading ? (
											<Loader2 className="h-4 w-4 animate-spin" />
										) : (
											"Send Verification Code"
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default PhoneNumber;
