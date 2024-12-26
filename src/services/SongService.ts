import { createClient } from "@supabase/supabase-js";
import Song from "../interfaces/Song";
import { supabase } from "../supabase/conn";

const NEXT_PUBLIC_SUPABASE_BUCKET_URL = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL ?? "";
const NEXT_PUBLIC_SUPABASE_SECRET_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY ?? "";



const bucketClient = createClient(
  NEXT_PUBLIC_SUPABASE_BUCKET_URL,
  NEXT_PUBLIC_SUPABASE_SECRET_KEY,
);


async function getAllSongs() {
  const res = supabase.from("song").select();
  console.log(res);
  return res;
}

function uploadFile(name: string, file: File) {
  return supabase.storage.from("songs").upload(name, file);
}

function createSong(song: Song) {
  return supabase.from("song").insert(song)
}

export const SongService = {
  getAllSongs,
  uploadFile,
  createSong
};
