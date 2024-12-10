import { AuthResponse, AuthTokenResponsePassword } from "@supabase/supabase-js";
import { User } from "../interfaces/User";
import { supabase } from "../supabase/conn";

type LogInUser = Pick<User, "email" | "password">;

const logIn = async ({ email, password }: LogInUser): Promise<AuthTokenResponsePassword> => {
  return await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
};

const register = async ({ email, password }: LogInUser): Promise<AuthResponse> => {
  return await supabase.auth.signUp({
    email: email,
    password: password,
  });
};

export const UserService = { 
    logIn, 
    register
 };
