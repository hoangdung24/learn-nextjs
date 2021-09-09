import { signIn } from "next-auth/client";

const LoginPage = () => {
	return (
		<div>
			<button
				onClick={() => {
					signIn("facebook", {
						callbackUrl: "https://learn-nextjs-cyan-one.vercel.app/",
						redirect: "https://learn-nextjs-cyan-one.vercel.app/",
					});
				}}>
				Login
			</button>
		</div>
	);
};

export default LoginPage;
