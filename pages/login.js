import { signIn } from "next-auth/client";

const LoginPage = () => {
	return (
		<div>
			<button
				onClick={() => {
					signIn("facebook", {
						callbackUrl: NEXT_PUBLIC_CALLBACK_URL,
					});
				}}>
				Login
			</button>
		</div>
	);
};

export default LoginPage;
