import { User } from "@supabase/supabase-js";

export interface IUser extends User {
  password: string;
}
