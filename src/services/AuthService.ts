import {
	AuthResponse,
	AuthTokenResponsePassword,
	SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { supabase } from '../supabase/conn';

export type AuthUser = Extract<SignUpWithPasswordCredentials, { email: string }>;

const logIn = async ({
	password,
	email,
}: AuthUser): Promise<AuthTokenResponsePassword> => {
	return await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
};

const register = async ({ email, password }: AuthUser): Promise<AuthResponse> => {
	return await supabase.auth.signUp({
		email: email,
		password: password,
	});
};

const verifySession = async (token: string) => {
	return await supabase.auth.getUser(token);
};

export const AuthService = {
	logIn,
	register,
	verifySession,
};
