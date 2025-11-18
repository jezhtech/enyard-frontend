import { SeoMeta } from "@/components/SeoMeta";
import { Button } from "@/components/ui/button";
import { PAGE_PATHS } from "@/seo/routeMeta";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";

const VerifyEmail = () => {
	const navigate = useNavigate();
	const { user, checkEmailVerified } = useAuth();

	useEffect(() => {
		if (!user) return;

		// Immediately check on page load
		const verifyImmediately = async () => {
			const verified = await checkEmailVerified();
			if (verified) navigate("/auth/verify-phone");
		};

		verifyImmediately();

		// Poll every 5 seconds (Firebase doesn’t realtime push emailVerified changes)
		const interval = setInterval(async () => {
			const verified = await checkEmailVerified();
			if (verified) {
				clearInterval(interval);
				navigate("/auth/verify-phone");
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [user]);

	return (
		<>
			<SeoMeta path={PAGE_PATHS.VerifyEmail} />

			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
			</div>

			<div className="min-h-screen flex items-center justify-center bg-muted/30 p-6">
				<div className="relative z-10 w-full max-w-md">
					<div className="text-center mb-8 gap-4 flex flex-col items-center">
						<img
							src="/lovable-uploads/98fab40e-4f49-42c5-bf83-50cb4020d1a4.png"
							alt="ENYARD"
							className="h-8 w-auto mx-auto mb-4"
						/>
						<h1 className="text-2xl font-bold">Verify Email</h1>
						<p className="text-muted-foreground">
							Please check your inbox and click the verification link.
						</p>

						<Button onClick={() => navigate("/auth/verify-phone")} disabled>
							Verification pending...
						</Button>
					</div>

					<div className="mt-6 text-center">
						<p className="text-xs text-muted-foreground">
							If you didn’t receive the email, check your spam folder.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default VerifyEmail;
