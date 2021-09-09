import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.Facebook({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
	],
	session: {
		jwt: true,
		maxAge: 60 * 60 * 24 * 15,
	},
	callbacks: {
		async signIn(user, account, profile) {
			console.log("signIn user", user);
			console.log("signIn account", account);
			console.log("signIn profile", profile);

			return true;
		},
		async jwt(token, user, account, profile, isNewUser) {
			// token.accountType = user.accountType;
			// token.id = user.idSaleor;
			// token.defaultBillingAddress = user.defaultBillingAddress;
			// token.accessToken = user.accessToken;
			// console.log("jwt", token);
			// console.log("jwt", user);
			// console.log("jwt", account);
			// console.log("jwt", profile);
			return token;
		},
		async session(session, token) {
			// session.id = token.id;
			// session.accountType = token.accountType;
			// session.defaultBillingAddress = token.defaultBillingAddress;
			// session.accessToken = token.accessToken;

			// console.log("session", session);
			return session;
		},
	},
});
