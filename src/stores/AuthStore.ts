import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import {   Session, User,  } from "@supabase/supabase-js";
import { AuthService, AuthUser } from "../services/AuthService";

type AuthStore = {
    user: User | undefined;
    token: Session | undefined;
    logIn:  (user: AuthUser) => Promise<void>;
    logOut:  () => void;
}

export const useAuthStore = create<AuthStore>()(devtools(
    persist(
        (set) => ({
            token: undefined,
            user: undefined,
            logIn: async (user) => {
                const res = await AuthService.logIn({password: user.password, email: user.email})
                if(res.error) throw res.error
                set(() => ({ user: res.data.user, token: res.data.session }))
                localStorage.setItem('token', JSON.stringify(res.data.session))
                localStorage.setItem('user', JSON.stringify(res.data.user))
            },
            logOut: () => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                set(() => ({ token: undefined, user: undefined }))
          
            }
        }),
        {
            name: 'authStore'
        }
    )
))
