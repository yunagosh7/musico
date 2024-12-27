import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import {   Session, User,  } from "@supabase/supabase-js";
import { AuthService, AuthUser } from "../services/AuthService";
import Song from "../interfaces/Song";

type SongStore = {
    songs: [Song];
    uploadFile:  (fileName) => Promise<void>;
    
}

export const useSongStore = create<SongStore>()(devtools(
    persist(
        (set) => ({
            songs: [],
        }),
        {
            name: 'SongStore'
        }
    )
))
