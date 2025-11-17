import { SeoMeta } from "@/components/SeoMeta";
import { Card, CardContent } from "@/components/ui/card";
import { PAGE_PATHS } from "@/seo/routeMeta";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
	const navigate = useNavigate();
	return (
		<>
			<SeoMeta path={PAGE_PATHS.VerifyEmail} />
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
			</div>

			<div className="min-h-screen flex items-center justify-center bg-muted/30 p-6">
				<div className="relative z-10 w-full max-w-md">
					{/* Logo */}
					<div className="text-center mb-8 gap-4 flex flex-col items-center">
						<img
							src="/lovable-uploads/98fab40e-4f49-42c5-bf83-50cb4020d1a4.png"
							alt="ENYARD"
							className="h-8 w-auto mx-auto mb-4"
						/>
						<h1 className="text-2xl font-bold">Verify Email</h1>
						<p className="text-muted-foreground">
							Please check your inbox and click the link to verify your email
							address.
						</p>
						<Button
							onClick={() => {
								navigate("/auth/verify-phone");
							}}>
							Verification pending!!
						</Button>
					</div>

					<div className="mt-6 text-center">
						<p className="text-xs text-muted-foreground">
							If you did not receive the email, please check your spam folder
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default VerifyEmail;
