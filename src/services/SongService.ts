import { supabase } from "../supabase/conn";

async function getAllSongs() {
    const res = supabase.from("song").select()
    console.log(res)
    return res
}

export const SongService = { 
    getAllSongs
 };
